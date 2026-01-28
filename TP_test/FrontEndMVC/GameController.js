export default class GameController {
    constructor(game, gameview) {
        this.pseudo=localStorage.getItem("pseudo"),
        this.serverUrl=localStorage.getItem("serverUrl"),
        // this.serverUrl="ws://localhost:8000/ws"
        this.skinPath=localStorage.getItem("skinPath"),
      //save timestanp
        this.lastServerUpdate=performance.now();
        this.game=game;
        this.view=gameview;
        // Server sends updates at 20 ticks per second
        this.SERVER_TICK_RATE = 20;
        // Duration between two server ticks in milliseconds
        this.SERVER_INTERVAL = 1000 / this.SERVER_TICK_RATE;
        
        // Permanently bind "this" at the instance of the GameController class
        this.loop = this.loop.bind(this);
        // Regulates framerate to keep 60fps
        requestAnimationFrame(this.loop);
        console.log(this.serverUrl);
        this.socket = new WebSocket(
        this.serverUrl //url
        );

        this.movement={   //création d'un dico pr mettre objet
            up:false,
            down:false,
            left:false,
            right:false,
            attack:false
        };
        this.initSocket();
        this.initInput();
        this.startInputSender();
       
    } //constructor
    
    initSocket(){
        this.socket.onopen=()=>{
            console.log("Connected to server"); //qd serveur open print connected
    
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
            clearInterval(this.inputInterval); // stop l’envoi
        };
        // console.log(JSON.stringify( {name:this.pseudo,skinPath:this.skinPath}))
    }

    initInput() {
        window.addEventListener("keydown", (event) => {
            switch (event.key) {
                case "z": this.movement.up = true; break;
                case "s": this.movement.down = true; break;
                case "q": this.movement.left = true; break;
                case "d": this.movement.right = true; break;
                case "k": this.movement.attack = true; break;
            }
        });

        window.addEventListener("keyup", (event) => {
            switch (event.key) {
                case "z": this.movement.up = false; break;
                case "s": this.movement.down = false; break;
                case "q": this.movement.left = false; break;
                case "d": this.movement.right = false; break;
                case "k": this.movement.attack = false; break;
            }
        });
    }

    startInputSender() {
        // Send inputs to the server at the same rate as server ticks
        this.inputInterval=setInterval(() => {
            // Do nothing if the socket is not ready
            if (this.socket.readyState !== WebSocket.OPEN) return;

            // Send the current input state
            this.socket.send(JSON.stringify({
                type: "input",
                input: this.movement
            }));
        }, this.SERVER_INTERVAL);
    }
    // === Main render loop ===
    loop(timestamp) {
        const alpha = Math.min((timestamp - this.lastServerUpdate) / this.SERVER_INTERVAL, 1);
        this.view.render(alpha);
        // for(const playerID in this.game.players){
        //     this.game.players[playerID].interpolate(alpha);
        // }
        // this.view.drawPlayer(player);
        // Request the next frame
        requestAnimationFrame(this.loop);        

    }
}
// === Start the game controller by instantiating the GameController class ===
// This line will execute the constructor (e.g, launch the frontend)
