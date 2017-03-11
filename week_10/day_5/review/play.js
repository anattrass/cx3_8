var numbers = [1, 2, 3, 4, 5];

// numbers.forEach(function(number){
//   console.log(number);
// });

// var forEach = function(array, callback){
//   for (var item of array) {
//     callback(item);
//   }
// };

// var squared = numbers.map(function(number){
//   return number * number;
// });

// console.log(squared);

// var map = function(array, callback){
//   var newArray = [];

//   for (var item of array) {
//     var newItem = callback(item);
//     newArray.push(newItem);
//   }

//   return newArray;
// }

// var evenNumbers = numbers.filter(function(number){
//   return !(number % 2); 
// })

// console.log(evenNumbers);

var filter = function(array, callback) {
  var newArray = [];

  for (var item of array) {
    if (callback(item)){
      newArray.push(item);
    }
  }

  return newArray;
}

var evenNumbers = filter(numbers, function(number){
  return !(number % 2); 
});

console.log(evenNumbers)

