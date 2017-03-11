var Food = require("../food");
var assert = require("assert");

describe("Food", function(){
  var food;

  beforeEach(function(){
    food = new Food("Stew", 15);
  });

  it("Should have a name", function(){
    assert.equal("Stew", food.name);
  });

  it("Should have a replenishment value", function(){
    assert.equal(15, food.replenishmentValue);
  });
});