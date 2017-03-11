require ('minitest/autorun')
require ('minitest/rg')
require_relative('bear')
require_relative('river')
require_relative('fish')

class TestBear < MiniTest::Test

def setup
  @fish1 = Fish.new('Bob')
  @fish2 = Fish.new('Alan')
  @fish3 = Fish.new('Agnes')

  fishes = [@fish1, @fish2, @fish3]
  @river = River.new(fishes)

  @bear = Bear.new('Yogi')
end

def test_bear_name
  assert_equal('Yogi', @bear.name)
end

def test_bear_starts_with_no_food
  assert_equal(0, @bear.food_count())
end

def test_can_bear_go_fishing
  @bear.go_fishing(@river)
  assert_equal(1, @bear.food_count)
  assert_equal(2, @river.number_of_fish())
end


end