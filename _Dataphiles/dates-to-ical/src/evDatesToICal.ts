'use strict';
/* 
# read file into struct
#   check for tabes
# grok
    # translate grumbull (2+) spaces to single tabs; 
        # !!!\t will obliterate (eat, remove) all tabs on either side and replace it with three tabs. 
    # expand ____ into current year
# use .map() to convert to ical 
# append ical to 
# write ical
# tests .. 
# free slurpee day
*/

function evDates2ical () {

  const lineReader = require('line-reader');

  lineReader.eachLine('../dates.txt', function(line) {
    console.log(line);

    if (line.includes('STOP')) {
        return false; // stop reading
    }

    // write dates

 });

 module.exports = evDates2ical;
