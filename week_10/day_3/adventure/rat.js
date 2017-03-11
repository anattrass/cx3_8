var Rat = function() {
};

Rat.prototype = {
  poison: function(food) {
    food.poisonous = true;
  }
};

module.exports = Rat;