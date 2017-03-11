DROP TABLE IF EXISTS pizza_orders;
DROP TABLE IF EXISTS customers;

CREATE TABLE customers(
  id SERIAL8 primary key,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE pizza_orders (
  id SERIAL8 primary key,
  topping VARCHAR(255),
  quantity INT2,
  customer_id INT8 references customers(id)
);