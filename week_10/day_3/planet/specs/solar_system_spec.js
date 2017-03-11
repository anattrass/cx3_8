var Planet = require("../planet");
var SolarSystem = require("../solar_system");
var assert = require("assert");

describe("Solar System", function(){

  var solarSystem = new SolarSystem("Ergon9");
  var solarSystem2 = new SolarSystem("Sol");
  var planet2 = new Planet("Mars");
  var planet3 = new Planet("Jupiter");
  var planet4 = new Planet("Neptune");

  it("Should have an empty planets array to start", function(){
    assert.equal(0, solarSystem.countPlanets());
  });

  it("Should add planets to the planets array", function(){
    solarSystem.addPlanet(planet2);
    solarSystem.addPlanet(planet3);
    solarSystem.addPlanet(planet4);
    assert.equal(3, solarSystem.countPlanets());
    assert.deepEqual([planet2, planet3, planet4], solarSystem.planets);
  });

  it("Can find a planet by its index", function(){
    solarSystem2.addPlanet(planet2);
    solarSystem2.addPlanet(planet3);
    assert.equal(planet3, solarSystem2.planets[1]);
  });

});