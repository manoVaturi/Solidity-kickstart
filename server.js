const { createServer } = require('http');
const next = require('next');

const app = next({
  dev: process.env.NODE_ENV !== 'production',
});

const routes = require('./routes');
const handlers = routes.getRequestHandler(app);

app.prepare().then(() => {
  createServer(handlers).listen(3000, (err) => {
    if (err) throw err;
    console.log('Ready on localhost:3000');
  });
});
