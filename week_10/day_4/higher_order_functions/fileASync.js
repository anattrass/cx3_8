//asynchronously example

var fs = require("fs");

fs.readFile("us-states.txt", "utf-8", function(err, data){
  if (err) {
    console.log("Uh oh! " + err);
  } else {
    var bufferString = data.toString();
    var newLineCount = bufferString.split("\n").length;

    console.log("There are " + newLineCount + " lines in the file");
    console.log("Oh, you've finished reading the file.");
  }
});

console.log("Oh, where has Oregon? She's gone to Arizona.");

// When you execute something synchronously, you wait for it to finish before moving on to another task. When you execute something asynchronously, you can move on to another task before it finishes.