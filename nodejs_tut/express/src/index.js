const express = require("express");
const port = 7000;
const app = express();
const path = require("node:path");

const staticPath = path.join(__dirname, "../public/html");

// ! builtin middleware
// app.use(express.static(staticPath));
// const fs = require("node:fs");
// const data = fs.readFileSync("./json.json", "utf-8");

app.get("/", (req, res) => {
  // res.send("home");
  res.sendFile(staticPath+"/index.html");

});
app.get("/home", (req, res) => {
  // res.send("about");
  res.sendFile(staticPath+"/home.html");
});

// app.get("/data", (req, res) => {
//   res.send(JSON.parse(data));
// });

app.listen(port, "127.0.0.1", () => {
  console.log("The port is run on " + port);
});
