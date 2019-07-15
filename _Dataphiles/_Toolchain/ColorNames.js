var parse = require('csv-parse');
console.log('start _Datafiles\index.js');
var csv = require('csv-parser');
var fs = require('fs');
;
function whatIsColor(rgb) {
    fs.createReadStream('colornames.csv')
        .pipe(csv())
        .on('data', function (row) {
        // console.log(row); // .name .hex
        var hex = row.hex.toUpperCase().replace('#', ' ').trim();
    })
        .on('end', function () {
        console.log('CSV file successfully processed');
    });
}
whatIsColor();
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
