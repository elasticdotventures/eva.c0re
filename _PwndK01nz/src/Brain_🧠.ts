
/*
Brain

class for an internal state machine;
neuron pattern matching. 

this isn't as fancy as you'd think -- 
this stores config file and memory. 

*/
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");


// let brain = new Brain();
/*
   id : string;
   $redis : any;
   $log : undefined;    // .emoji
   
   $dotinv = require('dotenv').config();

   // Calendars : undefined; // important dates
   // !!!todo $Calendars load historical data snapshots/ not necessary for the mvp. 

   // the clock implements events of time; the default resolution is 60 seconds.
   period : number = 60; 
   // this would be a good place to check an environment variable and output a log of a special setting.


   // /* 🕔  $Clock : any; 

   Grumbulls : undefined;  // grumbulls evaluators;  (searches for optimal quorum)
   Purpoiseii : undefined;  // purposes (usually this will just Cake; v2. Ubuntu at holidays)

   //state : 
   private() {
    // this state will NOT be mirrored. i.e. "everythingButPrivate"
    // this.$redis = dtRedis()
    return 
   }

*/