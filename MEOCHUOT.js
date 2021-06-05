class MeoChuot{
    constructor(name) {
        this.name = name;
        this.Size =5;
        this.Speed = 10;
        this.msg = '';


    }
    decreaseSize(){
        this.Size-=1;
    }
    getSpeed(){
       this.gSpeed+=2;
    }
    speekmsg(msg){
        this.msg=msg;
    }


}