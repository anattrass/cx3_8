require('minitest/autorun')
require('minitest/rg')
require_relative('../engine.rb')

class TestEngine < Minitest::Test

  def setup
    @engine = Engine.new("Vrrmmmm")
  end

  def test_engine_start_returns_noise
    assert_equal("Vrrmmmm", @engine.start())
  end

end