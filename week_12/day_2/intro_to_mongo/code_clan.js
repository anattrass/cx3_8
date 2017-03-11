use codeclan;

db.students.insert([
    {
      name: "Fred",
      favouriteFood: "Pizza"
    },
    {
      name: "Jeff",
      favouriteFood: "Haggis"
    }
  ]);

db.students.find();

db.instructers.insert([
    {
      name: "John",
      favouriteFood: "Pasta"
    },
    {
      name: "Jarrod",
      favouriteFood: "Burgers"
    }
  ]);

db.instructers.find();

show collections;

db.dropDatabase();