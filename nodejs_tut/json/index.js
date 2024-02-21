// ! JSON Stand for javascript object notation
// ! Json is a light weight formatted for storign data and tranporting data
// ! json is often  used when is sent from  a server to a webpage


const fs = require("node:fs");

fs.readFile("json.json", "utf-8", (error, data) => {
    console.log(data);
    const decoodeJson = JSON.parse(data);
    console.log(decoodeJson);
})