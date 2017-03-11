//arrow function, remove function word and replace it with =>, => implicitley uses bind(this)

var showMood = (name, mood) => {
  var name = name || "Jarrod";
  var mood = mood || "hungry";
  console.log(name, "is", mood);
}

showMood();
showMood("John", "sleepy");

const numbers = [1, 2, 3, 4, 5];

const squared = numbers.map(num => num * num);

console.log(squared);