const http = require('http'); 
const setup = {port:3000, host: '0.0.0.0'};

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n'); 
  });
  
server.listen(setup.port, setup.host, () => {
    console.log(`Server running at http://${setup.host}:${setup.port}/`);
});