var numbers = [1, 2, 3, 4, 5];

// for (var number of numbers) {
//   console.log(number);
// };

var printNumbers = function(number) {
  console.log(number);
}

// numbers.forEach(printNumbers);

var forEach = function(array, callback) {
  for (var item of array) {
    callback(item);
  }
}

forEach(numbers, printNumbers);