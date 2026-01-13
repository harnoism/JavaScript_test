class Player{
    constructor(pseudo,skin){
        this.pseudo= pseudo;
        this.skin=skin;
        this.atq=20;
        this.cooldown=  0.4 ;
        this.lvl= 1;
        this.speed= 1 ;
        this.hp=100;
        this.isdying=false;
        this.iswalking=false;
        this.isattacking=false;
        this.position= [y,x];
        //sprite
        this.walkspriteduration=2;
        this.walkspriteindex=0;
        this.walkspriteNumber=9;
        this.dyingspriteindex=0;
        this.dyingspriteduration=2;
        this.dyingspriteNumber=6;
        this.attackingspriteindex=0;
        this.attackingspriteduration=0.5;
        this.attackingspriteNumber=0;
        this.currentdyingspritestep=0;
        this.currentattackingspritestep=0;
        this.currentwalkspritestep=0;
        this.idlesprite=true;
    }

update(updateData){
    this.pseudo=updateData.pseudo;
    this.skin=updateData.skin;
    this.atq=updateData.atq;
    this.cooldown=updateData.cooldown;
}


Animate(){
    //the player is dying
    if(this.isdying){
        this.currentdyingspritestep++;
        if(this.dyingspriteindex>=this.dyingspriteNumber){
            this.dyingspriteindex++;
        }
    }
    //the player is attacking
    else if(this.isattacking){
        this.currentattackingspritestep++;
        this.currentattackingspritestep=0;
        this.attackingspriteindex++;
    }
    //the player is walking
    else if(this.iswalking){
        this.currentwalkspritestep++;
        this.currentwalkspritestep=0;
        this.walkspriteindex++;

    }
    //the player is idle
    else{
        this.idlesprite=false;
        if(this.walkspriteindex==false && this.dyingspriteindex==false && 
            this.attackingspriteindex==false){
                this.idlesprite=true;    
            }    
    }

console.log("walk_Animation :\n");
console.log("isWalking =",this.iswalking);
console.log("walkspriteindex= ", this.walkspriteindex, "/", this.walkspriteNumber);
console.log("this.currentwalkingspritestep =", this.currentwalkspritestep, "/", this.walkspriteduration);
}


movearound(thisway) {
    this. iswalking=true
    switch(thisway){
    case "z":
        position[0]-= 2;
        break;
    case "s":
        position[0]+=2;
        break;
    case "q":
        position[1]-=2;
        break;
    case "d":
        position[1]+= 2;
        break;
    }
}
}
