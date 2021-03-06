const App = require('./index.js');
const http = require('http');
const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

const app = new App();

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(app.saudacao());
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
