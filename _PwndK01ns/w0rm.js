/*
w0rm.js

README content


Minimum return 60 - 70% 2/3rd == win. 
getterMinimumReturn -- must be 66% on trades; with a 0.2% trading fee

.4% profit per trade 

period of time 
	* 1 minute + 1 point
	* golden ratio .. linear point system for duration
	* each point = a vote about what the right answer was
each node can compute
	activator function
		takes a state table for market
		does a transformation to binary
	it reponds with it's "total" winnings booty.
		* that WOULD have earned
	and we act on the majority of the votes
Number of trades

orange line
grey line = exponential moving average, smoothing 

purple dots?  are good times to sell. 
orange vertical lines indicate a downard motion
greens veritical are price going up

sell when 66% of the bots don't 

*/

// 🦨 import is commonJS only works in browser:
// import { Observable } from 'rxjs'
// import { range } from 'rxjs';
// import { map, filter } from 'rxjs/operators';
const { Observable, range } = require('rxjs');
const { map, filter } = require('rxjs/operators');

var Redis = require("ioredis");
var redis = new Redis();
const hasQuorum = 2/3;   // 0.6~ the inflection point where we lose quorum on

let b = {
    tick : 0,   // this will eventually become part of the state table. 
    usd : 0,    // points in usd
    btc : 0,      // points in btc (normalized into USD)
    '$redis' : redis
}

// Observable range 
// iterates 1..200 .. puts that into x. 
range(1, 200).pipe(
  filter(x => x % 2 === 1),  // ever odd number
  map(x => x + x)            // add to itself
).subscribe(x => console.log(x)); // do something with the value. 


// subscriber 
const observable = new Observable(subscriber => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3)
    setTimeout(() => {
      subscriber.next(4);
      subscriber.complete();
    }, 1000);
  });
  process.exit();


console.log('just before subscribe');
observable.subscribe({
  next(x) { console.log('got value ' + x); },
  error(err) { console.error('something wrong occurred: ' + err); },
  complete() { console.log('done'); }
});
console.log('just after subscribe');


/*
see "coinbase-sample.json" for some examples. 

client_oid = competitor id. 
type: "limit"

"size":"0.01300000","price":"224.35000000","side":"buy"
"type":"done","side":"sell","order_id":"ed622fed-7568-4769-b472-a86258e94c84",
"reason":"canceled",         // reason: insufficent funds, user cancel, timed out

"product_id":"BTC-USD",      // btc-usd
"price":"11836.27000000",       // price per coin
"remaining_size":"0.75000000",   // 
"sequence":10477649850,      // might be used for correlating orders
"time":"2019-08-08T10:10:35.170000Z"

{
    "type":"received",
     "order_id":"3f00d4bb-a222-4767-9430-e58fe2aad5d7",
     "order_type":"limit","size":"0.75000000","price":"11836.24000000",
     "side":"sell","client_oid":"78dc33c2-b3c6-4aa3-a483-ae7918a4f149",
     "product_id":"BTC-USD","sequence":10477649851,"time":"2019-08-08T10:10:35.178000Z"
 }

*/



/*
purpose: receive a stream of data; and populate a state table.
*/
function handleCoinbaseProMessage(event) {
    // this is the activator; 
    // break it into binary state (or table)
 
    // "time":"2019-08-08T10:10:35.157000Z"
    // let d = new Date(event.time);

    switch( event.type ) {
       case 'subscriptions': 
           // ignore this shit. 
           b.tick++;
           b.redis.zadd()
           break;
       case 'received': 
            b.tick += 2; 
            b.redis
            break;
       case 'heartbeat' : 
            // 🍰 notification that is sent every x seconds; 
            b.heartbeat = new Date(event.time);
            break; 
       case 'done':
            // 🍰 what does this do?  
             break;
       case 'open':
            // 🍰 what does this do?
            break;
       default:
            // this line should NEVER be reached unknown data type
            console.log('unknown tick!')
            b.tick = 0; 
            break; 
    } 

    if (b.tick % 10 == 0) { 
        // slow it down to only errors.
        console.log(`t:${b.tick} json: ${JSON.stringify(event)}`); 
    }

   return(b);
}

// install yargs here
// --file xyz or defaults to coinbase. 
const argv = require('yargs').argv

if (argv.test) {
    // 🦨 not working, will load from file. 
    const jsonfile = require('jsonfile')
    const file = '/tmp'
    jsonfile.readFile(file, function (err, obj) {
        if (err) console.error(err)
        console.dir(obj)
    })

}


if (argv.redis) {
 
    redis.set("foo", "xxx");
    redis.get("foo", function(err, result) {
    console.log(result);
    });
    redis.del("foo");

    // Or using a promise if the last argument isn't a function
    redis.get("foo").then(function(result) {
        console.log(result);
    });
}



if (argv.file) {
    console.log(`using ${argv.file}`)
}
else {
    
    const CoinbasePro = require('coinbase-pro');
    const publicClient = new CoinbasePro.PublicClient();
    const websocket = new CoinbasePro.WebsocketClient(['BTC-USD', 'ETH-USD']);

    // 
    websocket.on('message', data => {
        /* work with data  */ 
        b = handleCoinbaseProMessage(data); 
        // process new state; through binary function? brain.js 
    });
    websocket.on('error', err => {
        /* handle error */
        // !todo websocket.error needs love; 🍰 proper action? 
    });
    websocket.on('close', () => {
        /* ... */
        // 🍰 how do we send a kill signal? what is the handle.  sell everything? default back to ??
    });
}

console.log('initialized.')

