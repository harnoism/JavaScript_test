// Exemple de message recu par le backend, à utiliser pour vos tests :
const backendData = {
   "isRunning":true,
   "isOver":false,
   "timer":190.6000000000091,
   "players":{
      "3cd71bbb-6a6b-4d4e-80e3-107130328a27":{
         "name":"blabla",
         "skinPath":"./spritesheets/3.png",
         "position":[
            0.5600000000000003,
            0.17999999999999977
         ],
         "lvl":1,
         "hp":100,
         "maxHp":100,
         "hpRegenRate":10,
         "speed":0.2,
         "direction":3,
         "isAttacking":false,
         "isWalking":false,
         "isDying":false,
         "attackCooldown":1,
         "currentAttackCooldown":0
      },
      "28ead291-fcea-4b41-a596-d3c876c49a53":{
         "name":"bloublou",
         "skinPath":"./spritesheets/4.png",
         "position":[
            0.44,
            0.19
         ],
         "lvl":1,
         "hp":100,
         "maxHp":100,
         "hpRegenRate":10,
         "speed":0.2,
         "direction":0,
         "isAttacking":false,
         "isWalking":false,
         "isDying":false,
         "attackCooldown":1,
         "currentAttackCooldown":0
      }
   }
};

class Game{
   constructor(){
      this.isRunning=false; //le jeu n’a pas encore commencé
      this.isOver=false;  //le jeu n’est pas fini au démarrage
      this.timer=0;   //le serveur n’a pas encore envoyé le temps
      this.players={};
   }


   update(updateData) {
      
      // Update stats
      this.isRunning= updateData.isRunning;
      this.isOver = updateData.isOver;
      this.timer = updateData.timer;

      for (let playerId in updateData.players) {
         const player = updateData.players[playerId];  //Pour chaque joueur, on copie toutes ses informations dans le cahier
         console.log(player);
         
         if(playerId in this.players){ //si déja présent on update
            this.players[playerId].update(player);
            console.log("ancien");

         }else{
            this.players[playerId]=new Player (    //Instancie pour crée un new joueur
               playerId,
               player.name,
               player.skinPath,
               player.position
            );
            console.log("nouveau");
            this.players[playerId].update(player);
         }
      }
      for (let playerId in this.players) {
         if (!(playerId in updateData.players)) {
            delete this.players[playerId];
         }
      }

   }
}

const p1=new Game();
p1.update(backendData);
p1.update(backendData);
console.log(p1);