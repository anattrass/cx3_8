require('pg')
require_relative('../db/sql_runner')

class PizzaOrder
  attr_accessor :topping, :quantity, :customer_id
  attr_reader :id

  def initialize( options )
    @topping = options['topping']
    @quantity = options['quantity'].to_i
    @id = options['id'].to_i if options['id']
    @customer_id = options['customer_id'].to_i
  end

  def save
    sql = 
    "INSERT INTO pizza_orders (topping, quantity, customer_id)
    VALUES ('#{@topping}', #{@quantity}, #{@customer_id}) returning *;"
    result = SqlRunner.run(sql)
    @id = result[0]['id'].to_i
  end

  def delete
    return unless @id
    sql = "DELETE FROM pizza_orders WHERE id = #{@id}"
    SqlRunner.run(sql)
  end

  def update
    return unless @id
    sql = "UPDATE pizza_orders SET (topping, quantity, customer_id) = 
          ('#{@topping}', #{@quantity}, #{@customer_id})
          WHERE id = #{id};"
    SqlRunner.run(sql)
  end

  def customer()
    sql = "SELECT * from customers WHERE id = #{@customer_id};"
    result = SqlRunner.run(sql)
    customer = Customer.new (result[0])
    return customer
  end


  def self.all
    sql = "SELECT * FROM pizza_orders;"
    orders = SqlRunner.run( sql )
    return orders.map { |hash| PizzaOrder.new(hash) }
  end

  def self.delete_all
    sql = "DELETE FROM pizza_orders;"
    SqlRunner.run(sql)
  end



end 





