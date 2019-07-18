const parse = require('csv-parse')

console.log('start _Datafiles\index.js')

const csv = require('csv-parser');  
const fs = require('fs');

interface RGBColor {
    red: string;
    blue: string;
    green: string;
};

function whatIsColor(rgb : string) {

fs.createReadStream('colornames.csv')  
  .pipe(csv())
  .on('data', (row) => {
    // console.log(row); // .name .hex
    var hex = row.hex.toUpperCase().replace('#',' ').trim()
    

  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });

}

whatIsColor()

// const assert = require('assert')
/*

TYPESCRIPT SAMPLE: 

class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}



function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

document.body.textContent = greeter(user);


*/
