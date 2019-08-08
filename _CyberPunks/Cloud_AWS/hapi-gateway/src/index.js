'use strict';

// https://www.npmjs.com/package/apollo-server-hapi
// const { ApolloServer, gql } = require('apollo-server-hapi');
const Hapi = require('@hapi/hapi');
const Path = require('path');

const api = require('./api');         // EV api. 
// const graphqlHapi = require('apollo-server-hapi');


module.exports = {
  init: async () => {

    // const Apollo = new ApolloServer({ typeDefs, resolvers });

    const server = new Hapi.server({
      port: process.env.port || 3000,
      compression: false, 
      routes: { 
        cors: true,
        files: {
          // for hapi/inert 👇
          relativeTo: Path.join(__dirname, '../../../../')
        }
       }
    });

    const plugins = [api];
    await server.register(plugins);

    /* @hapi/inert -- static files served from c0re/
     https://hapijs.com/tutorials/serving-files?lang=en_US
    */
    await server.register(require('@hapi/inert'));

/*
    server.route({
      method: 'GET',
      path: '/json/crew.json',
      handler: {
        
      }
    })
*/


    // note: there MAY be a bug here; specifically with serverless offline
    // axios FROM BROWSER does not support gzip; looks like hapi does. 
    // https://hapijs.com/tutorials/serving-files?lang=en_US
    // ^^^ seems to have been fixed in a later version. 
    server.route({
      method: 'GET',
      path: '/c0re/{filename}',
      options: {
        // compression: false
        log : { collect: true }
      },
      handler: {
        // !todo validate filetypes .json
        /* directory: {
          // directory/ handler (must end in slash)
          path: "."
          redirectToSlash : true; 
        }, */
        file: function (request) {
          // file handler
          return request.params.filename;
        }
      }
      /* 
      handler: function (request, h) {
          // 🦨 __dirname == /mnt/c/projects/eva.c0re/_CyberPunks/Cloud_AWS/hapi-lambda-demo/src
          // console.log(`attempting crew.json`)
          return h.file('crew.json');
      }
      */ 
    });

server.route({
    method: 'POST',
    path: '/link/{pattern}',
    options: {
      log: { collection: true }
    },
    handler: {
      // find data/ return it.
    
    }

})


    /*
    // graphql
    myGraphQLSchema = require('./schema');
    await server.register({
      plugin: graphqlHapi,
      options: {
        path: '/graphql',
        graphqlOptions: {
          schema: myGraphQLSchema,
        },
        route: {
          cors: true,
        },
      },
    });
    */

    // return the server for Lambda support
    return server;
  },
};


process.on('unhandledRejection', (err) => {

  console.log(err);
  process.exit(1);
});
