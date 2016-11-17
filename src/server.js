'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 3000 });

server.route({
  path: '/',
  method: 'GET',
  handler: (request, reply) => reply('Hello, world!')
})

module.exports = server;
