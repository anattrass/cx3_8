var Rat = require("../rat");
var Food = require("../food");
var assert = require("assert");

describe("Rat", function(){
  var rat;
  var food;

  beforeEach(function(){
    rat = new Rat();
    food = new Food("Gooseberry", 5)
  });

  it("Should be able to posion the food", function(){
    rat.poison(food);
    assert.equal(true, food.poisonous);
  });

  });