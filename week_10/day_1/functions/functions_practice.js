function fullName(first, last) {
  console.log("Howdy I am", first, last);
}

fullName("Rick", "Henry");

function multiply(x, y) {
  return x * y;
}

console.log(multiply(5, 10));

function arrayFirstElement(array) {
  return array[0];
}

var beers = ["Carlsberg", "Bud", "Sierra Nevada"]

console.log(arrayFirstElement(beers));

// function listOfNames(array) {
//   return array;
// }

// var names = ["Adam", "David", "Joe", "Clare"]

// console.log(listOfNames(names));

function printNames() {
  for (var i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

printNames('Jarrod', 'John', 'Sandy');












