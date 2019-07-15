const parse = require('Colornames.ts')

console.log('start _Datafiles\index.js')

const csv = require('csv-parser');  
const fs = require('fs');

fs.createReadStream('colornames.csv')  
  .pipe(csv())
  .on('data', (row) => {
    console.log(row);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });


// const assert = require('assert')

