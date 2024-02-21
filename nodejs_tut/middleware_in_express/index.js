const express = require("express");
const path = require("path");

const app = express();

// app.get("", (req, res) => {
//     res.send("hello");
// });

// app.get("*", (req, res) => {
//     res.send("404 Error Page");
// })

app.listen(7000, () => {
  console.log("Your server is start on 7000");
});

// ! built in middleware

const staticPath = path.join(__dirname + "/html");

// app.use(express.static(staticPath));

// ! remove extension

// app.get("/", (req, res) => {
//   res.sendFile(staticPath + "/index.html");
// });

// app.get("/home", (req, res) => {
//   res.sendFile(staticPath + "/home.html");
// });

// ! application middleware

// const reqFilter = (req, res, next) => {
//   if (!req.query.name) {
//     res.send("Enter Your Age");
//   } else if (req.query.name < 18) {
//     res.send("Your are child");
//   } else {
//     next();
//   }
// };

// app.use(reqFilter);

// app.get("/", (req, res) => {
//   res.send("Welcome to the home page");
// });

// app.get("/about", (req, res) => {
//   res.send("Welcome to the about page");
// });


const route = express.Router();

// ! route Middleware
const reqFilter = (req, res, next) => {
  if (!req.query.name) {
    res.send("Enter Your Age");
  } else if (req.query.name < 18) {
    res.send("Your are child");
  } else {
    next();
  }
};

route.use(reqFilter);

route.get("/", reqFilter, (req, res) => {
  res.send("Welcome to the home page");
});

app.get("/about", (req, res) => {
  res.send("Welcome to the about page");
});

app.use("",route)

