const parse = require('csv-parse')
const assert = require('assert')

console.log('hello')

parse(`
"key_1","key_2"
"value 1","value 2"
`.trim(), {
  columns: true
}, function(err, records){
  assert.deepEqual(
    records, [{
      key_1: 'value 1',
      key_2: 'value 2'
    }]
  )
})
