require ('minitest/autorun')
require ('minitest/rg')
require_relative('fish')
require_relative('river')

class TestRiver < Minitest::Test

  def setup
    @fish1 = Fish.new('Bob')
    @fish2 = Fish.new('Alan')
    @fish3 = Fish.new('Agnes')

    fishes = [@fish1, @fish2, @fish3]
    @river = River.new(fishes)
  end

  def test_starts_with_fish
    assert_equal(3, @river.number_of_fish())
  end

  def test_can_get_fish
    fish = @river.get_fish()
    assert_equal(fish.name, @fish3.name)
  end

  

end