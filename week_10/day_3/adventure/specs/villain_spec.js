var Hero = require("../hero");
var Villain = require("../villain");
var assert = require("assert");

describe("Villain", function(){
  var hero;
  var villain;

  beforeEach(function(){
    villain = new Villain("Erik Sparrow", 100, "THUG")
    hero = new Hero("Gary", 100, "Humble Pie")
  });

  it("should be able to speak", function(){
    assert.equal("I am the mighty Erik Sparrow, I will destroy you", villain.speak(hero));
  });

  it("should get a different message if it is his arch nemesis", function(){
    hero = new Hero("THUG", 100, "Grip Tape")
    assert.equal("THUG you killed my cat and now I'm evil because of it", villain.speak(hero));
  });

  it("should be able to attack a hero", function(){
    villain.attack(hero);
    assert.equal(90, hero.health);
  });

  it("should attack the arch nemesis harder", function(){
    hero = new Hero("THUG", 100, "Grip Tape")
    villain.attack(hero);
    assert.equal(50, hero.health);
  });

  it("Should be able to kill the hero", function(){
    hero = new Hero("THUG", 50, "Grip Tape")
    villain.kill(hero);
    assert.equal(null, hero.name);
    assert.equal(null, hero.favouriteFood);
    assert.equal(null, hero.health);
  });

  it("Should injur the villain badly if he tries to kill but doesn't succeed", function(){
    villain.kill(hero);
    assert.equal(25, villain.health);
  });

});