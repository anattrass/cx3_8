require('minitest/autorun')
require('minitest/rg')
require_relative('../bicycle.rb')

class TestBicycle < Minitest::Test

  def setup
    @bicycle = Bicycle.new()
  end

  def test_bicycle_has_2_wheels
    assert_equal(2, @bicycle.number_of_wheels)
  end

end