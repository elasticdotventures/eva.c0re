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


*/

let tick = 0;   // this will eventually become part of the state table. 

/*
purpose: receive a stream of data; and populate a state table.
*/
function handleCoinbaseProMessage(event) {
    // this is the activator; 
    // break it into binary state (or table)
 

    switch( event.type ) {
       case 'subscriptions': 
           // ignore this shit. 
           tick++;
           break;
       case 'received': 
            tick += 2; 
            break;
       case 'heartbeat' : 
            // 🍰 what does this do? 
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
            tick = 0; 
            break; 
    } 

    if (tick % 10 == 0) { 
        // slow it down to only errors.
        console.log(`t:${tick} json: ${JSON.stringify(event)}`); 
    }

   return(tick);
}




const CoinbasePro = require('coinbase-pro');
const publicClient = new CoinbasePro.PublicClient();

const websocket = new CoinbasePro.WebsocketClient(['BTC-USD', 'ETH-USD']);

websocket.on('message', data => {
  /* work with data 

    see "coinbase-sample.json" for some examples. 

   "time":"2019-08-08T10:10:35.157000Z"
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
    handleCoinbaseProMessage(data); 
});
websocket.on('error', err => {
  /* handle error */
});
websocket.on('close', () => {
  /* ... */
});


