// jest preprocessor. 
// http://jonathancreamer.com/testing-typescript-classes-with-jest-and-jest-mocks/
// 
const tsc = require('typescript');  

// const tsConfig = require('./tsconfig.json');
var requireJSON = require('require-strip-json-comments');
const tsConfig = requireJSON("./tsconfig.json");


module.exports = {  

  process(src, path) {

    if (path.endsWith('.ts') || path.endsWith('.tsx')) {

      return tsc.transpile(

        src,

        tsConfig.compilerOptions,

        path,

        []

      );

    }

    return src;

  },

};
