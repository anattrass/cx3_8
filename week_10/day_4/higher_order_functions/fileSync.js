//synchronously example

var fs = require("fs");

var buffer = fs.readFileSync("us-states.txt");
var bufferString = buffer.toString();

var newLineCount = bufferString.split("\n").length;

console.log("There are " + newLineCount + " lines in the file");
console.log("Oh, you've finished reading the file.");

console.log("Oh, where has Oregon? She's gone to Arizona.");

// When you execute something synchronously, you wait for it to finish before moving on to another task. When you execute something asynchronously, you can move on to another task before it finishes.