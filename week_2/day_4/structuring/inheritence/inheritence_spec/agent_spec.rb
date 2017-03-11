require('minitest/autorun')
require('minitest/rg')
require_relative('../agent.rb')

class TestAgent < Minitest::Test

  def setup
    @agent = Agent.new()
  end

  def test_agent_can_speak
    assert_equal("Hi I'm Trevor, Trevor Murdoch", @agent.speak())
  end


end