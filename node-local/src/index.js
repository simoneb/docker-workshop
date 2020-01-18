const http = require("http");

http
  .createServer((req, res) => {
    res.end("hello worlds!");
  })
  .listen(8080);
