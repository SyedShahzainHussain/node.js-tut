const express = require("express");
const fileUpload = require("express-fileupload");
const app = express();

const user_controller = require("../controllers/user_controller");

app.use(express.json());

// ! Configure file upload middleware
app.use(
  fileUpload({
    useTempFiles: true,
  })
);



app.post("/registers", user_controller.register_user);

module.exports = app;
