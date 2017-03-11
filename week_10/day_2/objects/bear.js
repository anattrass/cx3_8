var bear = {
  type: "Teddy",
  name: "Dezmond",
  belly: [],
  eat: function(food) {
    this.belly.push(food);
  }
}

bear.eat("Ham");
bear.eat(37);

console.log(bear.belly);