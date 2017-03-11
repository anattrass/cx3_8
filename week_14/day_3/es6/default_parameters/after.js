//set the parameters with default values like this in es6

var showMood = function(
  name = "Jarrod", 
  mood = "hungry"
) {

  console.log(name, "is", mood);
}

showMood();
showMood("John", "sleepy");