require('pry-byebug')
require_relative('models/pizza_order')
require_relative('models/customer')

PizzaOrder.delete_all
Customer.delete_all
customer1 = Customer.new({ 'name' => 'Adam Nattrass' })
customer2 = Customer.new({ 'name' => 'Jethro Biggins'})

customer1.save()
customer2.save()

order1 = PizzaOrder.new({
  'customer_id' => customer1.id,
  'topping' => 'Jalapenos',
  'quantity' => 12
  })
order2 = PizzaOrder.new({
  'customer_id' => customer2.id,
  'topping' => 'Stilton',
  'quantity' => 1
  })

order1.save()
order2.save()
# order1.delete()

order2.topping = "chicken and leak"

order2.update()

orders = PizzaOrder.all()

customers = Customer.all



binding.pry
nil