// ! stream

const fs = require("node:fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  // ? first way
  //   fs.readFile("abc.txt", "utf-8", (error, data) => {
  //     console.log(data);
  //     console.log(error);
  //     res.end(data);
  //   });
  // ? second way
  // const createStream = fs.createReadStream("abc.txt");
  // createStream.on("data", (chunkdata) => {
  //     res.write(chunkdata);
  // })
  // createStream.on("end", (error) => {
  //     res.end();
  // })
  // createStream.on("error", (error) => {
  //     res.end(error);
  // })
  // createStream.on("finish", (error) => {
  //     res.end(error);
  // })
    // ? third way
    const createStream = fs.createReadStream("abc.txt");
    createStream.pipe(res);
});

server.listen(7000, "127.0.0.1", () => {
  console.log("your server is start on 7000");
});
