const server = require('../src/server');
const Tape = require('tape');

Tape('Does the server start?', t => {
  server.start(err => {
    if (err) {
      t.error(err);
    } else {
      t.pass('Server starts without error');
    }
    server.stop({}, t.end);
  });
});

Tape('Does the server handle the root route?', t => {
  server.inject('/', res => {
    t.equal(res.statusCode, 200, "Response status code should be 200");
    t.end();
  });
});
