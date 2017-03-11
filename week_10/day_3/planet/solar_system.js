var SolarSystem = function(name) {
  this.name = name;
  this.planets = [];
  this.countPlanets = function() {
    return this.planets.length;
  };
  this.addPlanet = function(planet) {
    this.planets.push(planet);
  };
};



module.exports = SolarSystem;