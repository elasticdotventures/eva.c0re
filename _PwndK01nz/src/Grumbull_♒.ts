
class Grumbull {
    // class scope?
    engine:string;

    // constructor is called once. 
    constructor(engine:string) {
        this.engine = engine;
    }

    // function 
    disp():void {
        console.log(`Engine is: ${this.engine}`)
    }

}
