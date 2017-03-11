var Hero = require("../hero");
var Food = require("../food");
var Rat = require("../rat");
var assert = require("assert");

describe("Hero", function(){
  var hero;
  var rat;

  beforeEach(function(){
    hero = new Hero("Dick", 100, "Egg Sandwich");
    rat = new Rat();
  });

  it("Should have a name", function(){
    assert.equal("Dick", hero.name);
  });

  it("Should have a health value", function(){
    assert.equal(100, hero.health);
  });

  it("Should have a favourite food", function(){
    assert.equal("Egg Sandwich", hero.favouriteFood);
  });

  it("Should be able to say catchphrase", function(){
    assert.equal("My name is Dick and I am here to save stuff!", hero.speak());
  });

  it("Should be able to eat food and increase health", function(){
    food = new Food("Stew", 15);
    hero.eat(food);
    assert.equal(115, hero.health);
  });

  it("Should get 1.5* the value when the hero eats favourite food", function(){
    food = new Food("Egg Sandwich", 20);
    hero.eat(food);
    assert.equal(130, hero.health);
  });

  it("Poisonous food should reduce the hero's health", function() {
    food = new Food("Egg Sandwich", 20);
    rat.poison(food);
    hero.eat(food);
    assert.equal(80, hero.health);
  });

});