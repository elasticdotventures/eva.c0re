/**
 * Health Check API methods
 */
module.exports = {

  getCheck: () => ({ status: 'OK' }),
  getStatus: () => 'OK',
  getStatus201: (request, h) => h.response('Accepted').code(201),
  lookupRedirect: (request, h) => { 

    // !fix 🦨 note: synchronous file reads are bad; 🙏 don't use them mmmmmkay?

    // NOTE:     request.params.tag is the uri param. 
    
    var fs = require('fs');
    //   open file 
    var array = fs.readFileSync('/p/c0re/links.txt').toString().split("\n");
    let url = undefined;
    
    for(i in array) {
      // now iterate through lines
      if (array[i].substring(0,1) == '#') {
        //  skip first character is a #
        // ignore hashtag lines
      }
      else if (array[i] == '') {
        //  skip blank lines
        // ignore blank lines
      }
      else {
        //  split into three columns:  domain, tag, url
        let cells = array[i].split('|')
        // cell format: domain|tag|url
        if (cells[1] == request.params.tag) {
          url = cells[2];
        }
      }
      // console.log(array[i], url);
    }

    if (url) {
      return h.redirect(url)
    }
    else {
      return h.response(`${request.params.tag} was not found in eva.c0re/links.txt`);
    }
  }

};
