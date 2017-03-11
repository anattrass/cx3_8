var Fish = function(name, colour) {
  this.name = name;
  this.colour = colour;
};

Fish.prototype = {
  swim: function() {
    console.log("splash");
  }
};

var myFish = new Fish("nemo", "orange");
myFish.swim();
console.log(myFish);

console.log(Object.getPrototypeOf(myFish));
console.log(myFish.__proto__);



// var wisePerson = {
//   wisdom: function(){
//     console.log("commit often")
//   }
// };

// var myPerson = Object.create(wisePerson);

// myPerson.walk = function() {
//   console.log("left right left right");
// };

// myPerson.wisdom();