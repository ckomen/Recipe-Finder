const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

// Use port from environment variable or default to 3001
const port = process.env.PORT || 3001;

server.listen(port, () => {
  console.log(`JSON Server is running on ${port}`);
});
