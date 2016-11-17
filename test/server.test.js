const server = require('../src/server');
const tape = require('tape');

tape('Does the server start?', (t) => {
  server.start(err => {
    t.error(err);
  });
})
