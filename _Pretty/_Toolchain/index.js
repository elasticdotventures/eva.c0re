
// reverses a png image (creates a negative)

var fs = require('fs'),
    PNG = require('pngjs').PNG;
 
var toHex = require('colornames'); 


fs.createReadStream('brianh.png')
    .pipe(new PNG({
        filterType: 4
    }))
    .on('parsed', function() {
 
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
        var idx = 0; 
        var bgcolor = `${this.data[0].toString(16)}${this.data[1].toString(16)}${this.data[2].toString(16)}`;
        console.log(` bgcolor: ${bgcolor} ${toHex(bgcolor)}`)

        toHex(bgcolor)


        for (var y = 0; y < this.height; y++) {
            for (var x = 0; x < this.width; x++) {
                var idx = (this.width * y + x) << 2;
 
                    

                // invert color
                this.data[idx] = 255 - this.data[idx];
                this.data[idx+1] = 255 - this.data[idx+1];
                this.data[idx+2] = 255 - this.data[idx+2];
 
            

                // and reduce opacity
                this.data[idx+3] = this.data[idx+3] >> 1;
            }
        }
 
        this.pack().pipe(fs.createWriteStream('indexjs-reverse.png'));
    });
    