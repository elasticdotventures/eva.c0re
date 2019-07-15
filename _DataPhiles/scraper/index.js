const ddg = require('ddg-scraper')
 
ddg.search({
  q: 'cbd isolate',
  max: 500
}, (err, urls) => {
  if (!err) {
    console.log(urls)
  }
})
