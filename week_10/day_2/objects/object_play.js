var guineaPig = {
  speak: function(punchline) {
    console.log("The " + this.type + "pig says'" + punchline + "'");
  }
};

var happyPig = Object.create(guineaPig);
happyPig.type = "Happy";
happyPig.speak("Is it hot? Because I'm Bacon...");

var killerPig = Object.create(guineaPig);
killerPig.type = "Killer";
killerPig.speak("SKREEEE!");


// var myDog = Object.create(null);
// myDog.smell = "musky";

// console.log("myDog", myDog);

// myDog.talk = function() {
//   console.log("I am a dog and I smell " + this.smell);
// }

// myDog.talk();

// var myPerson = {
//   name: "Guybrush",
//   age:32,
//   weapon: "cutlass",
//   talk: function() {
//     return "shiver me timbers, Im alive and my name is " + this.name;
//   }
// };

// console.log("my person", myPerson);
// console.log(myPerson.talk());