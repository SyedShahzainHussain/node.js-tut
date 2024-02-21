// ! event

const EventEmitter = require("events");

const event = new EventEmitter.EventEmitter();

event.on("zain", (num,String,bool,arr) => {
  console.log("event hit");
  console.log(num,String,bool,arr);
});

event.emit("zain",12,"hello",true,["ase",12]);
