require ('minitest/autorun')
require ('minitest/rg')
require_relative('fish')

class TestFish < Minitest::Test

  def test_fish_has_name
  fish = Fish.new('Alan')
  assert_equal('Alan', fish.name)
  end

end