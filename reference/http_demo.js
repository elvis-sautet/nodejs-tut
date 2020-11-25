const http = require("http");

//Create a server object
http
  .createServer((req, res) => {
    res.write("hello world!");
    res.end();
  })
  .listen(5001, () => console.log("server running"));
