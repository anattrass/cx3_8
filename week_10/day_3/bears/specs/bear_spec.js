var Bear = require("../bear");
var assert = require("assert");

describe("Bear", function(){

  var bear1 = new Bear(25, "Teddy", 50)
  var bear2 = new Bear(31, "Polar", 95)

  it("Bear should have an age", function(){
    assert.equal(25, bear1.age);
  });

  it("Bear should have a type", function(){
    assert.equal("Teddy", bear1.type);
  });

  it("Bear should have a weight", function(){
    assert.equal(50, bear1.weight);
  });

  it("Bear can Roar", function(){
    assert.equal("GRRRRRRRRRRR!", bear1.roar());
  });

  it("Bear can eat", function(){
    bear1.eat();
    assert.equal(60, bear1.weight);
  });

  it("Bear can hibernate", function(){
    assert.equal("I am asleep for the winter, too cold to be walking about", bear2.hibernate());
  });

  it("Bear weight goes to 50 after hibernation", function() {
    var bear3 = new Bear(31, "Polar", 95)
    assert.equal("I am asleep for the winter, too cold to be walking about", bear3.hibernate());
    assert.equal(50, bear3.weight);
  });
});

