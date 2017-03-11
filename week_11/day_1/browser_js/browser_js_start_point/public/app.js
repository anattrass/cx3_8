var Wizard = function(name){
  this.name = name;
};

Wizard.prototype = {
  defend: function(){
    return "Expecto Patronum";
  }
};

var wizard = new Wizard;

console.log(wizard.defend());