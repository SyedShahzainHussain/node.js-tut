const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/students")
  .then((_) => {
    console.log("connection successfully");
  })
  .catch((e) => {
    console.log(e);
  });
