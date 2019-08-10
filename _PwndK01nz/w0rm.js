
/*
w0rm.js
by @b 
*/ 

// install yargs here
// --file xyz or defaults to coinbase. 
const argv = require('yargs').argv

// 🦨 import is commonJS only works in browser:
const { Observable, range } = require('rxjs');
const { map, filter } = require('rxjs/operators');
const observeCoinbase = new Observable(subscriber => {
    subscriber.next('{}')
}); 
// import {observable} from 'mobx';


/*
stream format: 
streamSegment(start,[intervals]) {
    epoch, open, high, low, volume
    }




--redis     💎 hot snapshot of ephemeral data 
            ^^^ see coinbase for codes. 

--brain filename.json


stream everybody is "pissing into"...


--no_stockastic 🎱 (default on)
we let neurons collaborate about strategies 
with a 66.6% "golden ratio"; majority quorum and a stockastic (stochastic; random) evasive manuever. 
stockastic movements are triggered on "null" move; 

// Examine historical Market; Optimal move(s) --
🟡 hold         (yellow)
🔴 red sell     (purple)
🔵 wait         (blue)
🟢 buy          (purple)
⚫ end          (black)

// emtron ?? an emoji symbol

// the classifiers & operators
each classifier applies a transformation to the gradient;



// confidence
💪 a score of the number of times it's been accurate.  (vector addition)
👾 'streak' number of past historical predictions      (vector multiplication)

// special classifiers 
🎯 we got 66.6% accuracy
🐂 (bull) majority wants to buy        acoustic "volume knob" we can +/-  
🐻 (bear) majority wants to sell       acoustic "volume knob" we can +/-

😁 win (profit)
😥 loss (loss)

👑 is among the top 10% of earnings
💀 is among the lowest 10% 
   // reaper will cause it to sochastically alter it's parameters

👽 outlier   how does this get measured? heatmap / items not near center .. more than one standard deviation?? (not sure)
💩 technical error, exception


// mvp 3; requires we dive back 
// in terms of animals; this is the individual bots that we track; we assign them a dangerous creatures "oreilly" pattern
// with dragons being the wins/loss (made a good move, made a bad move)
🐲
🐉
🐼
🦝
🦆
🦩

🦄 is a robot that makes 66.6% or better right moves (we're chasing the unicorns) 

// basically 
readyToExit()
{
natural selection
	how many of my gradients are descending
	// compared to my peers? 
	// rank the class; kill the slow learners
	// if nobody is winning; 
		// evasive manuever. 

	// report -- win/loss
}	


classifier {
	label: 
	behavior:
	outputs weight 
	* weight total possible points / your points 
	* weight can also invert and be lowest possible score. 
	transparency is 0xFF 
	}

    


	open [0] present
	high  (all)
	low  (all)

choose color
add:


save() this layer

	profil




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




const hasQuorum = 2/3;   // 0.6~ the inflection point where we lose quorum on

let b = {
    tick : 0,   // this will eventually become part of the state table. 
    usd : 0,    // points in usd
    btc : 0,      // points in btc (normalized into USD)
    '$redis' : null,  // --redis
    '$coinbase' : observeCoinbase, // --coinbase 
}


/* 💀👆 define variables, import new modules  BEFORE THIS LINE */ 
//////////////////////////////////////////////////////////////////

if (argv.isMarketMover) {
// metric: marketMoverRate { usd: $40, buy: 1.2 million }
// to move bitcoin by $40 / 1.2 million .3% ==
// 1% market move right now would cost me $4.5 million ---
// * marketDepth 
// week before the crash
// week before spike

// Observable range, for scenarios. 
// iterates 1..200 .. puts that into x. 
    
// 🦨 just stub code. 

/* 
const observeCoinbase = new Observable(subscriber => {
        subscriber.next('1a'); // pushes value 1, 2 3 .. 
    subscriber.next(2);
    subscriber.next(3)
    setTimeout(() => {
      subscriber.next(4); // waits a second; pushes 4
      subscriber.complete();
    }, 5000);   // milliseconds. 
  });

*/ 

    range(1, 200).pipe(
        // load scenario .. 
        // filter(x => x % 2 === 1),  // ever odd number
        // map(x => x + x)            // add to itself
    ).subscribe(x => console.log(x)); // do something with the value. 

}



/*
purpose: receive a stream of data; transform it into a data series for redis/vue.js
 and populate a state table.
*/
function handleCoinbaseProMessage(event) {


    /*
see "coinbase-sample.json" for some examples. 

client_oid = competitor id. 
type: "limit"

"size":"0.01300000","price":"224.35000000","side":"buy"
"type":"done",
"side":"sell",
"order_id":"ed622fed-7568-4769-b472-a86258e94c84",
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

    // "time":"2019-08-08T10:10:35.157000Z"
    let now = new Date(event.time).getTime(); 

    var sha1 = require('sha1');
    var replayId = sha1(`${event.type} ${event.sequence}`); 
    if (b.$redis.exists(replayId)) {
        // !todo data replay check. 

    }

    // not sure how to incrementally update data. 
    
    // var myId =  `${now}!${event.type}.${event.side}`; 
    // var keyBucket = new Array(); 

    switch( event.type ) {
       case 'subscriptions': 
           // ignore the subscription because they don't imapct
           b.tick = 0; 
           myKey = null; 
           // b.redis.zadd()
           break;
       case 'received': 
            // we can ignore this for now; these are the unexecuted orders. 
            // we should ignore; this is the "other bot" channel; 
            // * until we're ready to start tracking client_oid
            /* {"type":"received",
            "order_id":"6714570b-5cb1-4a72-9013-f8c66e135508",
            "order_type":"limit","size":"0.01300000","price":"224.35000000","side":"buy","client_oid":"","product_id":"ETH-USD","sequence":7147163716,}
            */ 
            // keyBucket.push(myKey); 
            // 
            switch (type.side) {
                case 'buy' : 
                    // price
                    break;
                case 'sell' : 
                    // price
                    break;
                default : {
                    // !todo log critical error. 
                    // poop  
                }
            }
            
          
            redis.hset(myKey+'.price',price); 
            b.tick++; 
            // b.redis
            break;
       case 'heartbeat' : 
            // ignore these; sort of
            // 🍰 notification that is sent every x seconds; 
            // !todo deadman switch on heartbeat to verify connnection is still open
            // what is minimum interval between heartbeats. 
            b.heartbeat = new Date(event.time);
            break; 
       case 'done':
            // done are the only orders which actually move the market bitcoin price. 
            // 🍰 what does this do? -- mutates state.
            b.tick++; 
            switch (event.reason) {
                case 'filled' : 
                    //  {"type":"done","side":"buy","order_id":"e2a83ead-35da-4c82-a07d-7aa1a2c2e10f","reason":"filled","product_id":"BTC-USD","price":"11836.13000000","remaining_size":"0.00000000","sequence":10477650031,"time":"2019-08-08T10:10:36.100000Z"}
                    myKey = `${myKey}.${event.product_id}`
                    redis.hset( myKey, price )
                    break; 
                case 'canceled' : 
                    console.log(`got done-cancelled + ${event}`)     
                     break; 
                default : 
                    // !todo emit 💩
                    break; 
            }
            
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


if (argv.fill) {
    /* populate the redis with the stream of time series data
      * from an observable that is streaming the data
      theDataChannel() {
        // 
      }
      * create an observable to receive the data, 
      pass that to a function which generates the . 
    */
}

if (argv.test) {
    // 🦨 not working, will load from file. 
    const jsonfile = require('jsonfile')
    const file = '/tmp'
    jsonfile.readFile(file, function (err, obj) {
        if (err) console.error(err)
        console.dir(obj)
    })

}

// product order book. 
if (argv.pob) {
    // Get the order book at the default level of detail.
    const CoinbasePro = require('coinbase-pro');
    const publicClient = new CoinbasePro.PublicClient();
    // LTC-USD 
    publicClient.getProductOrderBook('BTC-USD', (x)=>{ console.log( `getProductOrderBook` + x) });


    
    // getCurrencies
    // publicClient.getProduct24HrStats('BTC-USD', callback);
}

 

// redis server code. 
if (argv.redis) {
 
   // var Redis = require("ioredis");
    // var redis = new Redis();
    var redis = require("redis"),
    client = redis.createClient();
    b.$redis = client; 

    // diagnostics
    client.on("error", function (err) {
        // !todo 🍰 add+test critical crash telemetry. 
        console.log("Error " + err);
    });

    const myNodeId = 'hello_world'
    b.$redis.set("foo", myNodeId);
    b.$redis.get("foo", function(err, result) {
        if (result != myNodeId) {
            console.log('Failed redis test');
            throw Error; 
            } 
        else {
            console.log('redis 😁 ' + result);
        }  
        });
    // redis.del("foo");

    // redis.zadd('metric', timestamp, number); 
    // u8 is unsigned integer
    
    // bitfield is a 24 hour moving average
    // redis.bitfield('metric-key','SET','u8','#0','value')
    // different bitfields for different days. 
    // console.log('date now:' + Date.now())

    // client.hset('foo_key', 'foo_subkey', Date.now());
    // client.hgetall("foo_key", function (err, obj) {
    //     console.dir(obj);
    // });
    /* .else((err) => {
        throw Error('redis.hget failed')
    })*/

    // redis.hexists.


    // Or using a promise if the last argument isn't a function
    /* redis.get("foo").then(function(result) {
        console.log(result);
    }); */ 
    console.log('exit redis')
}

if (argv.activate) {
  // process new state; through binary function? brain.js as part of an event loop; every second, or faster. 
  // this is the activator; 
  // read state; and digest into a binary state (or table)

}


// --coinbase code. 
if (argv.coinbase) {  
    const CoinbasePro = require('coinbase-pro');
    const publicClient = new CoinbasePro.PublicClient();
    const websocket = new CoinbasePro.WebsocketClient(['BTC-USD', 'ETH-USD']);

    // !future - initialize redis with this data: 
    // publicClient.getProducts(callback); // different currencies and balances 
    // getProductOrderBook
    //      


    // 
    b.$coinbase = new Observable( subscriber => {
       websocket.on('message', data => {
            /* pass coinbase messages to an observable.   */ 
            subscriber.next(data); 
       })
    });

    websocket.on('error', err => {
        /* handle error */
        // !todo websocket.error needs love; 🍰 proper action? 
    });

    websocket.on('close', () => {
        /* ... */
        // 🍰 how do we send a kill signal? what is the handle.  sell everything? default back to ??
    });

    // 🚀 at this point we're emitting websock into an observable b.$coinbase 
    // the purpose behind the abstraction is to be able to route OTHER future 

    // secondary transform; allows us to replay other data
    console.log('just before coinbase subscribe');
    b.$coinbase.subscribe({
        next(x) { 
            // console.log('got value ' + JSON.stringify(x)); 
            handleCoinbaseProMessage(x); 
        }, // will pop a next value. 
        error(err) {  
            // !todo what are the situations where a subscribe will error?
            console.error('something wrong occurred: ' + err); 
        }, 
        complete() { console.log('done'); }
        });

    console.log('just after coinbase subscribe');
}


console.log('initialized.')

