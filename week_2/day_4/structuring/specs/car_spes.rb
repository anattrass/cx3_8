require('minitest/autorun')
require('minitest/rg')
require_relative('../car.rb')
require_relative('../engine.rb')

class TestCar < Minitest::Test

  def setup
    @car_engine = Engine.new("Vrrmmmm")
    @car = Car.new("Ford", @car_engine)
  end

  def test_car_can_start_engine
    assert_equal("Vrrmmmm", @car.start_engine())
  end

  def test_car_has_4_wheels
    assert_equal(4, @car.number_of_wheels)
  end

  def test_car_has_a_model
    assert_equal("Ford", @car.model)
  end

end