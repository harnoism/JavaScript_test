export default class GameView {
    constructor(game) {
        this.canvas = document.getElementById("canvas");
        this.canvas.width = 750;
        this.canvas.height = 600;
        this.game = game;
        this.sprite = {};
        this.ctx = this.canvas.getContext("2d");

        const skinPath = localStorage.getItem("skinPath");

        this.img = new Image();
        this.img.src = skinPath;

        this.bg = new Image();
        this.bg.src = "bg.jpg";

        for (let i = 1; i < 30; i++) {
            let skinPath2 = `assets/${i}.png`;
            this.sprite[skinPath2] = new Image();
            this.sprite[skinPath2].src = skinPath2;  //précharge limage
        }


    }//constructor

    // Nettoie canvas pcq sa réecrit dessus à chq fois
    clear() {
        this.ctx.clearRect(
            0,
            0,
            this.canvas.width,
            this.canvas.height
        );
    }

    // Dessine un fond 
    drawBackground() {
        if (this.bg.complete) {
            this.ctx.drawImage(
                this.bg,
                0,
                0,
                this.canvas.width,
                this.canvas.height
            );
        }
    }


    // Appelée à chaque frame
    render(alpha) {
        this.clear();
        this.drawBackground();

        const joueurs = Object.values(this.game.players);

        // Indicateur joueurs vivants
        const vivants = joueurs.filter(p => !p.isDead).length;
        const total = joueurs.length;

        this.ctx.fillStyle = "#ffffff";
        this.ctx.fillText(`Joueurs vivants : ${vivants} / ${total}`, 20, 25);

        // Dessin des joueurs
        for (let player of joueurs) {
            player.interpolate(alpha);
            this.drawPlayer(player);
        }

        // Classement (UNE fois par frame)
        this.afficherClassement(joueurs);
    }


    drawPlayer(player) {
        player.animate();
        if (player.hp <= 0) player.isDying = true;
        const sprite = this.sprite[player.skinPath];

        const x = player.renderX * this.canvas.width;
        const y = player.renderY * this.canvas.height;

        let swidth = 64;
        let sy = 128;

        let sx = 0;
        switch (player.direction) {
            case 0:
                sy = 512;
                break;
            case 1:
                sy = 704;
                break;
            case 2:
                sy = 640;
                break;
            case 3:
                sy = 576;
                break;
        }
        if (player.isWalking) {
            sx = player.walkSpriteIndex * swidth;
        }
        else if (player.isAttacking || player.attackSpriteIndex > 0) {
            const array = ["assets/7.png", "assets/26.png", "assets/29.png", "assets/24.png",
                "assets/21.png", "assets/18.png", "assets/13.png"];
            if (array.includes(player.skinPath)) {

                swidth = 128;
                switch (player.direction) {
                    case 0:
                        sy = 3456;
                        break;
                    case 1:
                        sy = 3840;
                        break;
                    case 2:
                        sy = 3712;
                        break;
                    case 3:
                        sy = 3584;
                        break;
                }
            } else {
                swidth = 192;
                switch (player.direction) {
                    case 0:
                        sy = 3456;
                        break;
                    case 1:
                        sy = 4032;
                        break;
                    case 2:
                        sy = 3840;
                        break;
                    case 3:
                        sy = 3648;
                        break;
                }
            }
            sx = player.attackSpriteIndex * swidth;
        }
        if (player.isDying) {
            sy = 1280;
            sx = player.deathSpriteIndex * swidth;
        }
        this.ctx.drawImage(
            sprite,
            sx, sy, swidth, swidth,
            x - swidth / 2, y - swidth / 2, swidth, swidth,

        );

        let percent = player.hp / player.maxHp;
        let hpSize = 64 * percent; //re ajuste la barre de vie

        if (!player.isDying || !player.isDead) {

            this.ctx.fillStyle = "#ffffff";
            this.ctx.fillText(
                this.game.timer.toFixed(2), 365, 30
            );
            this.ctx.fillStyle = "#0700d5";
            this.ctx.fillRect(
                x - 30, y - 32, 64 * player.currentAttackCooldown, -6
            );
            this.ctx.fillStyle = "#de0000";
            this.ctx.fillRect(
                x - 30, y - 40, 64, -7
            );
            this.ctx.fillStyle = "#017e09";
            this.ctx.fillRect(
                x - 30, y - 40, hpSize, -7
            );
            this.ctx.fillStyle = "#ffffff";
            this.ctx.fillText(
                "| " + player.name, x, y - 50
            );
            this.ctx.fillStyle = "#ffffff";
            this.ctx.fillText(
                "Lvl " + player.lvl, x - 30, y - 50
            );
        }

    }
    trierJoueurs(a, b) {

        // Vivants avant morts
        if (!a.isDead && b.isDead) return -1;
        if (a.isDead && !b.isDead) return 1;

        // Vivants → niveau décroissant
        if (!a.isDead && !b.isDead) {
            return b.lvl - a.lvl;
        }

        // Morts → temps de survie décroissant
        return (b.survivalTime ?? 0) - (a.survivalTime ?? 0);
    }


    afficherClassement(joueurs) {
        const ul = document.getElementById("classement");
        ul.innerHTML = "";

        joueurs
            .slice() // évite de modifier l'ordre original
            .sort((a, b) => this.trierJoueurs(a, b))
            .forEach((player, index) => {

                const li = document.createElement("li");

                if (!player.isDead) {
                    li.textContent = `${index + 1}.  ${player.name} — Lvl ${player.lvl}`;
                } else {
                    li.textContent = `${index + 1}.  ${player.name} — Survie ${player.survivalTime?.toFixed(1) ?? 0}s`;
                }

                ul.appendChild(li);
            });
    }



}//class

