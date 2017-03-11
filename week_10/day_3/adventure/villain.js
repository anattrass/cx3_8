var Villain = function(name, health, archNemesis) {
  this.name = name;
  this.health = health;
  this.archNemesis = archNemesis;
};

Villain.prototype = {
  speak: function(hero) {
    if(this.archNemesis === hero.name) {
      return hero.name + " you killed my cat and now I'm evil because of it";
    }
    else {
      return "I am the mighty " + this.name + ", I will destroy you";
    }
  },
  attack: function(hero) {
    if(this.archNemesis === hero.name) {
      hero.health -= 50;
    }
    else {
      hero.health -= 10;
    }
  },
  kill: function(hero) {
    this.attack(hero)
    if(hero.health <= 0) {
      delete hero.name;
      delete hero.favouriteFood;
      delete hero.health;
    }
    else {
      this.health -= 75;
    }
  }
};


module.exports = Villain;