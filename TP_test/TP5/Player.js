class Player{
    constructor(pseudo,skin){
        this.pseudo= pseudo;
        this.skin=skin;
        this.atq=20;
        this.cooldown=  0.4 ;
        this.lvl= 1;
        this.speed= 1 ;
        this.hp=100;
        this.isdead=false;
        this.iswalking=false;
        this.isatq=false;
    }
}
update 

// const p1=new Player("Idryixia",...)