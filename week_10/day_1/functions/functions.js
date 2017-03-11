// var hello = function() {
//   return "HEY!";
// }

// var wow = function(func) {
//   return func();
// }

// console.log( wow(hello) );


// function hello() {
//   return("HEY!");
// }

// console.log(hello());

// function mood(name, mood) {
//   console.log("Hello", name, "you are", mood);
// }

// mood("Jarrod", "tired");

function add() {
  var total = 0;
  for(var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

var total = add(1, 2, 3, 4, 5);
console.log(total);