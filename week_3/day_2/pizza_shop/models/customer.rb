require('pg')
require_relative('../db/sql_runner')

class Customer

  attr_accessor :name
  attr_reader :id

  def initialize( options )
    @id = options['id'].to_i if options['id']
    @name = options['name']
  end

  def save()
    sql = "INSERT INTO customers (name) VALUES ('#{@name}') RETURNING *;"
    customer = SqlRunner.run(sql)
    @id = customer[0]['id'].to_i
  end

  def pizza_orders()
    sql = "SELECT * from pizza_orders WHERE customer_id = #{@id};"
    pizza_orders = SqlRunner.run(sql)
    return pizza_orders.map { |order| PizzaOrder.new(order) }
  end

  def self.all()
    sql = "SELECT * FROM customers;"
    customers = SqlRunner.run( sql )
    return customers.map { |person| Customer.new(person) }
  end

  def self.delete_all
    sql = "DELETE FROM customers;"
    SqlRunner.run(sql)
  end

end