var Cow = function(name) {
  this.name = name;
}

Cow.prototype = {
  moo: function() {
    return "Moo!";
  }
}

var cow = new Cow();
console.log(cow.moo());