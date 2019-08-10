/*

README content
--coinbase  ⚽ 
            pulls coinbase feed; publishes to internal channel such as $coinbase.feed
            part of computed state; always part of computed.state 

            ⚽🙂 = happy "good"
            ⚽😞 = probably delayed (against system clock)
            ⚽💩 = means technical errors 
            !todo verify this results .. i.e. in test mode; 
                * test sets the input; expects the output

FROM README: 
    firehose
    reducer

TypeScript - Module. ... 
Modules are a way to create a local scope in the file. 
So, all variables, classes, functions, etc. that are declared in a 
module are not accessible outside the module. 

A module can be created using the keyword export 
and a module can be used in another module using the keyword import .

https://basarat.gitbooks.io/typescript/docs/project/tsconfig.html


*/
class CoinBase {
    // id : string;
   // $brain : any; 

    constructor() {
     //   this.$brain = Brain; 
    }
}

let coinbase = new CoinBase();

/*
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
*/