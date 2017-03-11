var showMood = function(name, mood) {
  var name = name || "Jarrod";
  var mood = mood || "hungry";
  console.log(name, "is", mood);
}

showMood();
showMood("John", "sleepy");