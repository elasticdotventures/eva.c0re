// import CoinBase from '@/src/Coinbase_⚽'
// let myValidator = new CoinBase();

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
*/ 

// import Greeter from 'Coinbase_⚽'
// let greeter = new Greeter("world");
// const x = require('Coinbase_⚽.ts');

// http://jonathancreamer.com/testing-typescript-classes-with-jest-and-jest-mocks/

const CoinBase = require('./CoinBase_⚽')
const cb = new CoinBase(); 

const sum = require('../sum');
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

