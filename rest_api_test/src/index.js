require("./db/index");
const router = require("./router/index");
const port = process.env.PORT || 8000;
const express = require("express");
const app = express();

app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log("your server is running on this " + port);
});
