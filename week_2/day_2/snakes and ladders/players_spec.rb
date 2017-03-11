require ('minitest/autorun')
require ('minitest/rg')
require_relative('players')

class TestPerson < MiniTest::Test

  def setup
   @player1 = Players.new('Yellow')
   @player2 = Players.new('Blue')
   @player3 = Players.new('Green')
  end

  def test_position
    
  end





end