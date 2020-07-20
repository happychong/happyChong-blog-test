let http = require('http');
let server = http.createServer(function (req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end("hello ! This is HappyChong's first blog");
});

server.listen(3000, () => {
  console.log('the server is started at port 3000.');
})