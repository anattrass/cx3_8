class Cow {

  constructor(name) {
    this.name = name;
  }

  moo() {
    return "Moo!";
  }

}

var cow = new Cow();
console.log(cow.moo());