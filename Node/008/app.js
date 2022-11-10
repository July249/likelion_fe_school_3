// 파일이름 : 007_http\app1.js
const http = require('http');

const server = http.createServer(function (req, res) {
  console.log('server가 구동중입니다.');
  console.log(req.headers);
  console.log(req.method);
  console.log(req.url);
  res.write('<h1>hello world</h1>');
  res.end();
});

server.listen(8080);
