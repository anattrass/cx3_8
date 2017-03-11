use farm;

db.animals.insert({
  name: "Fred",
  type: "Polar Bear"
});

db.animals.insert({
  name: "Trevor",
  type: "Lion"
});

// db.animals.find({name: "Trevor"});
db.animals.find()
// db.animals.find().toArray()[0].name;

db.animals.update({
  name: "Fred"},
  {
    $set: {type: "Goose"}
  }
);

db.animals.find()

db.animals.remove({name: "Fred"});

db.animals.find()

db.dropDatabase();