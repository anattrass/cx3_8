var _ = require("lodash");

var robot = {
  bestFriend: "boss",
  welcome: function() {
    return "Hello " + _.capitalize(this.bestFriend);
  }
};

module.exports = robot;