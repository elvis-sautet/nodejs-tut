const EventEmitter = require("events");

//create a class
class MyEmitter extends EventEmitter {}

//init b=object
const myEmitter = new MyEmitter();

//Event listener
myEmitter.on("event", () => console.log("Event fired"));

//init event
myEmitter.emit("event");
