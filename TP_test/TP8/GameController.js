class GameController {
    constructor() {
      
        // Server sends updates at 20 ticks per second
        this.SERVER_TICK_RATE = 20;
        // Duration between two server ticks in milliseconds
        this.SERVER_INTERVAL = 1000 / this.SERVER_TICK_RATE;

        // Permanently bind "this" at the instance of the GameController class
        this.loop = this.loop.bind(this);

        // Regulates framerate to keep 60fps
        requestAnimationFrame(this.loop);

        this.game=new Game();


        this.pseudo=localStorage.getItem("pseudo"),
        this.url=localStorage.getItem("serverUrl"),
        this.skinPath=localStorage.getItem("skinPath"),

        this.socket = new WebSocket(
        this.url //url
        );
   
        this.movement={   //création d'un dico pr mettre objet
            up:false,
            down:false,
            left:false,
            right:false,
            attack:false
        };
        this.initSocket();
        this.startInputSender();
        this.initInput();
       
    } //constructor
    
    initSocket(){
        this.socket.onopen=()=>{
            console.log("Connected to server");
    
            this.socket.send(JSON.stringify({   //envoie un message
                name: this.pseudo,
                skinPath: this.skinPath
            }));
        };

        this.socket.onmessage=(event)=>{
             this.lastServerUpdate = performance.now();
            // Parse the received game state
            const gameState = JSON.parse(event.data);
            console.log(gameState);
            // Synchronize frontend game state with backend data
            this.game.update(gameState);
        };

        this.socket.onclose = () => {
            console.log("Disconnected from server");
        };
        console.log(JSON.stringify( {name:this.pseudo,skinPath:this.skinPath}))
    }

    initInput() {
        window.addEventListener("keydown", (event) => {
            switch (event.key) {
                case "z":
                    this.movement.up = true;
                    break;
                case "s":
                    this.movement.down = true;
                    break;
                case "q":
                    this.movement.left = true;
                    break;
                case "d":
                    this.movement.right = true;
                    break;
                case "f":
                    this.movement.attack = true;
                    break;
            }
        });

        window.addEventListener("keyup", (event) => {
            switch (event.key) {
                case "z":
                    this.movement.up = false;
                    break;
                case "s":
                    this.movement.down = false;
                    break;
                case "q":
                    this.movement.left = false;
                    break;
                case "d":
                    this.movement.right = false;
                    break;
                case "f":
                    this.movement.attack = false;
                    break;
            }
        });
    }

    startInputSender() {
        // Send inputs to the server at the same rate as server ticks
        setInterval(() => {
            // Do nothing if the socket is not ready
            if (this.socket.readyState !== WebSocket.OPEN) return;

            // Send the current input state
            this.socket.send(JSON.stringify({
                type: "input",
                input: this.inputState
            }));
        }, this.SERVER_INTERVAL);
    }
    // === Main render loop ===
    loop(timestamp) {

        // Request the next frame
        requestAnimationFrame(this.loop);
    }

}

// === Start the game controller by instantiating the GameController class ===
// This line will execute the constructor (e.g, launch the frontend)
new GameController();
