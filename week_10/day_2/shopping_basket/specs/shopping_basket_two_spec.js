var assert = require("assert")
var shoppingBasket = require("../shopping_basket_two.js")

describe("Shopping Basket", function(){
  var basket

  beforeEach(function(){
    basket = new shoppingBasket("Ted");
  })

  it("should have a name", function(){
    assert.equal("Ted", basket.name);
  })

  it("should start out as an empty shopping basket", function(){
    assert.equal(0, basket.countItems())
  })

  it("should be able to add an item to basket", function(){
    basket.addItem({name: "Milk", price: 15.50})
    assert.equal(1, basket.countItems())
  })

  it("should be able to remove an item from the basket", function(){
    basket.addItem({name: "corn flakes", price: 23.40})
    basket.addItem({name: "corn flakes", price: 23.40})
    basket.removeItem()
    assert.equal(1, basket.countItems())
  })

  
})