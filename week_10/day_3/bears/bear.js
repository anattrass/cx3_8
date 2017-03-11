var Bear = function(age, type, weight) {
  this.age = age;
  this.type = type;
  this.weight = weight;
};

Bear.prototype = {
  roar: function() {
    return "GRRRRRRRRRRR!";
  },
  eat: function() {
    this.weight += 10;
  },
  hibernate: function() {
    this.eat();
    if(this.weight > 100) {
      this.weight = 50;
      return "I am asleep for the winter, too cold to be walking about";
    }
  }
};




module.exports = Bear;