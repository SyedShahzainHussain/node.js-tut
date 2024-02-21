const http = require("http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
    const data = fs.readFileSync("json.json", "utf-8");
  if (req.url == "/" || req.url == "/home" || req.url == "") {
    res.end(data);
  } else {
    res.end("No Page Found");
  }
});

server.listen(7000, "127.0.0.1");
