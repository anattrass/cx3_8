setTimeout(function(){
  console.log("I waited for one second");
}, 1000);

var thingWeWantToHappenLater = function(){
  console.log("I happened after a certain amount of time");
};

setTimeout(thingWeWantToHappenLater, 2000);


// var myFunction = function(aFunction, number) {
//   aFunction(number);
// };

// var anotherFunction = function(number) {
//   console.log(number);
// };

// myFunction(anotherFunction, 99);