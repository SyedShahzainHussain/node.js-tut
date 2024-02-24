const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/testingApi")
  .then((_) => {
    console.log("Done");
  })
  .catch((error) => {
    console.log(error);
  });
