var express = require('express');
var dogRouter = express.Router();

var dogs = ['Labrador', 'Spaniel', 'Poodle'];

// Index
dogRouter.get('/dogs', function (req, res) {
    res.json(dogs);
});

// Show
dogRouter.get('/dogs/:id', function (req, res) {
    res.json({ data: dogs[req.params.id] });
});

// Create
dogRouter.post('/dogs', function (req, res) {
    dogs.push(req.body.dog);
    res.json({ data: dogs });
});

// Update
dogRouter.put('/dogs/:id', function (req, res) {
    dogs[req.params.id] = req.body.dog;
    res.json({ data: dogs });
});

// Delete
dogRouter.delete('/dogs/:id', function(req, res){
  dogs.splice(req.params.id, 1);
  res.json({data: dogs});
});

module.exports = dogRouter;