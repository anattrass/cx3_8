var functionCaller = function(callback, number) {
  callback(99);
};

var myCallback = function(number) {
  console.log(number);
};

functionCaller(myCallback);

var increment = function(number) {
  return number += 1;
};

increment(12);

var square = function(number) {
   return number * number;
};

square(8);

var doSomeMathsForMe = function(callback, number) {
  return callback(number);
};

console.log(doSomeMathsForMe(square, 6));

console.log(doSomeMathsForMe(increment, 3));

