var basket = {
  shopping: [],
  countItems: function(){
    return this.shopping.length;
  },
  empty: function(){
    return this.shopping = [];
  },
  addItem: function(item){
    this.shopping.push(item);
  },
  removeItem: function(){
    return this.shopping.pop();
  },
  getTotalPrice: function(){
    var total = 0;
    for (item of this.shopping) {
      total += item.price;
    }
    return total
  },
  tenPercent: function(){
    if (this.getTotalPrice() >= 20) {
      return this.getTotalPrice() * 0.9;
    }
  },
  loyaltyDiscount: function(customer){
    if (customer.card === true) {
      return this.getTotalPrice() * 0.95;
    }
  },
  buyOneGetOneFree: function(){
    if (this.shopping.bogof === true) {
      return this.getTotalPrice()
    }
  }
};




module.exports = basket;