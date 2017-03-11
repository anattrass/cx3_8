var Basket = function(name){
  this.name = name;
  this.shopping = [];
};

Basket.prototype = {
  countItems: function() {
    return this.shopping.length;
  },
  addItem: function(item) {
    this.shopping.push(item);
  },
  removeItem: function() {
    this.shopping.pop();
  }


};

module.exports = Basket;