const server = require('../src/server');
const tape = require('tape');

tape('Does the server start?', (t) => {
  server.start(err => {
    if (err) {
      t.error(err);
    } else {
      t.pass('Server is running');
    }
    server.stop();
    t.end();
  });
})
