



import Coda from 'coda-js/src/index.js'; 
const coda = new Coda('a3974175-890d-4e70-b289-d113329abc4f'); // insert your token

function Greeter(greeting: string) {
 
// trick for using async in a script
(async () => {
 
    const whoAmI = await coda.whoAmI();
    console.log(whoAmI);
 
})().catch(error => console.log(error));

}

Greeter('hello');