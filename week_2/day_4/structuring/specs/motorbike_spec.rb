require('minitest/autorun')
require('minitest/rg')
require_relative('../motorbike.rb')
require_relative('../engine.rb')

class TestCar < Minitest::Test

  def setup
    @motorbike_engine = Engine.new("Vrrmmmm (I'm a motorbike) HELL YEAH")
    @motorbike = Motorbike.new(@motorbike_engine)
  end

  def test_motorbike_can_start_engine
    assert_equal("Vrrmmmm (I'm a motorbike) HELL YEAH", @motorbike.start_engine())
  end

  def test_motorbike_has_2_wheels
    assert_equal(2, @motorbike.number_of_wheels)
  end

end