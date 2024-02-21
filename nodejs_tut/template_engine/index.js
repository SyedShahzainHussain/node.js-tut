// ! template engine

// const express = require("express");
// const app = express();

// app.set("view engine", "hbs");

// app.get("", (req, res) => {
//   res.send("hellow");
// });

// app.get("/home", (req, res) => {
//   const user = {
//     name: "shahzain",
//     age: 12,
//     gender: "male",
//   };
//   res.render("index.hbs", { user });
// });

// app.listen(7000);

const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("", (req, res) => {
  res.send("<h1>hello</h1> ");
});

app.get("/home", (req, res) => {
  const user = {
    name: "shahzain",
    age: 12,
    gender: "male",
  };
  res.render("home.ejs", { user });
});
app.listen(7000);

// ? BONUS that the default folder is views when we code with template engine so how can  change the folder name and apply to the template engine

// const path = require("path");

// const templates = path.join(__dirname + "/templates");
// app.set("views", templates);
