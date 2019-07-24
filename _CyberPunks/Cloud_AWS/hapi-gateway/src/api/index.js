'use strict';

const health = require('./health');
const Joi = require('@hapi/joi');

/**
 * Register the API module with the server
 */
const register = server => {
  server.route(health);

  server.route({
      method:'GET',
      path:'/',
      handler: (request,h) =>  {
        return 'Hello w000rld'
      }
  });

  // from https://hapijs.com/tutorials/routing?lang=en_US
  server.route({
    method: 'GET',
    path: '/hello/{user}',
    handler: function (request, h) {

        var user = request.params.user || request.payload.username;
        return `Hello ${encodeURIComponent(user)}!`;
     },
    options: {
      // the problems with hapi validate is that if something isn't found. 
      auth: false,
      validate: {
        params: {
          user: Joi.string().min(3) 
        }
          //payload: {
          //    username: Joi.string().min(1).max(20),
              // password: Joi.string().min(7)
          //}
      }
  } 
  });



  // 404 page!
  server.route({
    method: '*',
    path: '/{any*}',
    handler: function (request, h) {

        return '404 Error! Page Not Found!';
    }
});

};

module.exports = {
  plugin: {
    name: 'api',
    version: '1.0.0',
    register
  },

};