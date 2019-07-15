#!/usr/bin/env node

'use strict';

// https://github.com/yargs/yargs/blob/HEAD/docs/examples.md
const argv = require('yargs')
.default('in', 'test.svg').alias('i','in')
.default('out', 'svgo-output.svg').alias('o','out')
.usage('Usage: $0 -in in.svg -out svgo-output.svg')
.demandOption(['in'])
.count('debug').alias('d', 'debug').argv

var VERBOSE_LEVEL = argv.debug;

function WARN()  { VERBOSE_LEVEL >= 0 && console.log.apply(console, arguments); }
function INFO()  { VERBOSE_LEVEL >= 1 && console.log.apply(console, arguments); }
function DEBUG() { VERBOSE_LEVEL >= 2 && console.log.apply(console, arguments); }

/*
Some yargs practice()

WARN("Showing only important stuff");
INFO("Showing semi-important stuff too");
DEBUG("Extra chatty mode");

$ ./plunder.js --ships=4 --distance=22
Plunder more riffiwobbles!
 
$ ./plunder.js --ships 12 --distance 98.7
Retreat from the xupptumblers!
if (argv.ships > 3 && argv.distance < 53.5) {
  console.log('Plunder more riffiwobbles!')
} else {
  console.log('Retreat from the xupptumblers!')
}

console.log('(%d,%d)', argv.x, argv.y);

*/


var FS = require('fs'),
    PATH = require('path'),
    SVGO = require('svgo'),

    filepath = PATH.resolve(__dirname, argv.in),
    svgo = new SVGO({
        plugins: [{
          cleanupAttrs: true,
        }, {
          removeDoctype: true,
        },{
          removeXMLProcInst: true,
        },{
          removeComments: true,
        },{
          removeMetadata: true,
        },{
          removeTitle: true,
        },{
          removeDesc: true,
        },{
          removeUselessDefs: true,
        },{
          removeEditorsNSData: true,
        },{
          removeEmptyAttrs: true,
        },{
          removeHiddenElems: true,
        },{
          removeEmptyText: true,
        },{
          removeEmptyContainers: true,
        },{
          removeViewBox: false,
        },{
          cleanupEnableBackground: true,
        },{
          convertStyleToAttrs: true,
        },{
          convertColors: true,
        },{
          convertPathData: true,
        },{
          convertTransform: true,
        },{
          removeUnknownsAndDefaults: true,
        },{
          removeNonInheritableGroupAttrs: true,
        },{
          removeUselessStrokeAndFill: true,
        },{
          removeUnusedNS: true,
        },{
          cleanupIDs: true,
        },{
          cleanupNumericValues: true,
        },{
          moveElemsAttrsToGroup: true,
        },{
          moveGroupAttrsToElems: true,
        },{
          collapseGroups: true,
        },{
          removeRasterImages: false,
        },{
          mergePaths: true,
        },{
          convertShapeToPath: true,
        },{
          sortAttrs: true,
        },{
          removeDimensions: true,
        },{
          removeAttrs: {attrs: '(stroke|fill)'},
        }]
      });

FS.readFile(filepath, 'utf8', function(err, data) {

    if (err) {
        throw err;
    }

    svgo.optimize(data, {path: filepath}).then(function(result) {


        WARN(`write ${argv.out}`);
        // console.log(result);
        FS.writeFileSync( argv.out, result.data.toString() )

        // {
        //     // optimized SVG data string
        //     data: '<svg width="10" height="20">test</svg>'
        //     // additional info such as width/height
        //     info: {
        //         width: '10',
        //         height: '20'
        //     }
        // }

    });

});


