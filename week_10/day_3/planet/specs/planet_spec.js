var Planet = require("../planet");
var assert = require("assert");


describe("Planets", function(){

  var planet1 = new Planet("Earth");

it("Should find the planet name", function(){
  assert.equal("Earth", planet1.name);
})

})