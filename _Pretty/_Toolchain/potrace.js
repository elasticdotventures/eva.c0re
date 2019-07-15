var potrace = require('potrace'),
    fs = require('fs');
 
potrace.trace('./brianh.png', function(err, svg) {
  if (err) throw err;
  fs.writeFileSync('./brianh.svg', svg);
  console.log('blah')
});
