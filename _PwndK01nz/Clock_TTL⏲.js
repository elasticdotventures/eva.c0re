
// https://adrianmejia.com/getting-started-with-node-js-modules-require-exports-imports-npm-and-beyond/

// typescript
npm install --save-dev @babel/preset-typescript

// import { Observable } from 'rxjs';

const fx = require('rxjs');


const K = 1000;  
const INTERVAL = K;  
const MINUTES = 25;  
const TIME = MINUTES * K * 60;

// 🙏 https://frontend.consulting/a-simple-countdown-with-rx-js
// In order to keep the time’s state when 
// pausing/resuming the timer, we define two variables:
let current: number;  
let time = TIME;

// current will be continually updated every second
// time will be updated when the timer stops

// We define some helper functions used by our streams. We want to:
// convert remaining time to milliseconds and seconds
// have functions to display remaining minutes and seconds

const toMinutes = (ms: number) =>   
Math.floor(ms / K / 60);

const toSeconds = (ms: number) =>   
Math.floor(ms / K) % 60;

const toSecondsString = (ms: number) => {  
const seconds = toSeconds(ms);  
return seconds < 10 ? `0${seconds}` : seconds.toString();  
}

const toMs = (t: number) => t * INTERVAL;

const currentInterval = () => time / INTERVAL;  

const toRemainingSeconds = (t: number) => currentInterval() - t;

*/