var Hero = function(name, health, favouriteFood) {
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
};

Hero.prototype = {
  speak: function() {
    return "My name is " + this.name + " and I am here to save stuff!";
  },

  eat: function(food) {
    if (food.poisonous === true) {
      this.health -= 20;
    }
    else if (food.name === this.favouriteFood){
      this.health += (food.replenishmentValue * 1.5);
    } else {
      this.health += food.replenishmentValue;
    }
  }

  // die: function() {
  //   if (this.health === 0) {
  //     delete this.name;
  //   }
  // }
};
  // favFood: function(food) {
  //   if(food.name === hero.favouriteFood) {
  //     this.health += (food.replenishmentValue * 1.5);
  //   }
  // }


module.exports = Hero;