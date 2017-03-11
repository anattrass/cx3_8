var robot = require("./robot");
var assert = require("assert");

describe("Robot", function() {
  it("should welcome me", function() {
    assert.equal("Hello Boss", robot.welcome());
  })
});