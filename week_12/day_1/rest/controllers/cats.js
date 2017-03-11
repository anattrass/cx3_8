var express = require('express');
var catRouter = express.Router();

var cats = ['Bengal', 'Siamese', 'Manx', 'Calico', 'Nyan'];

// Index
catRouter.get('/cats', function (req, res) {
    res.json(cats);
});

// Show
catRouter.get('/cats/:id', function (req, res) {
    res.json({ data: cats[req.params.id] });
});

// Create
catRouter.post('/cats', function (req, res) {
    cats.push(req.body.cat);
    res.json({ data: cats });
});

// Update
catRouter.put('/cats/:id', function (req, res) {
    cats[req.params.id] = req.body.cat;
    res.json({ data: cats });
});

// Delete
catRouter.delete('/cats/:id', function(req, res){
  cats.splice(req.params.id, 1);
  res.json({data: cats});
});

module.exports = catRouter;