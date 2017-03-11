var shoppingBasket = require("../shopping_basket");
var assert = require("assert");

describe("Shopping Basket", function(){
  var basket;

  beforeEach(function(){
    basket = Object.create(shoppingBasket);
  })

  it("should be empty at the start", function(){
    assert.equal(0, basket.countItems());
  });

  it("Should be able to add an Item to the basket", function(){
    basket.addItem({name: "Milk", price: 1.00});
    assert.equal(1, basket.countItems());
  });

  it("Should be able to remove an Item from the basket", function(){
    basket.removeItem();
    assert.equal(0, basket.countItems());
  })

  it("Should be able to get the total price of the basket", function(){
    basket.addItem({name: "Carrot", price: 0.10});
    basket.addItem({name: "Milk", price: 1.00});
    assert.equal(1.10, basket.getTotalPrice());
  })

  it("Should take 10 percent off if the basket if £20 or more", function(){
    basket.addItem({name: "Football", price: 18.90});
    assert.equal(18, basket.tenPercent());
  })

  it("Should take 5 percent off if a customer has a discount card", function(){
    basket.empty();
    basket.addItem({name: "Fountian Pen", price: 10.00});
    assert.equal(9.50, basket.loyaltyDiscount({card: true}));
  })

  it("Should use the BOGOF discount to reduce the price", function(){
    basket.empty();
    basket.addItem({name: "Milk", price: 1.00, bogof: true});
    basket.addItem({name: "Orange Juice", price: 1.50, bogof: true});
    basket.addItem({name: "Giant Pork Pie", price: 3.00, bogof: false});
    assert.equal(4.50, basket.buyOneGetOneFree());
  })

  });

