// ! Operating System

const os = require("node:os");
// ! check the window bit
console.log(os.arch());

console.log(os.freemem() / 1024 / 1024 / 1024);

console.log(os.totalmem() / 1024 / 1024 / 1024);