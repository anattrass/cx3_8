require('minitest/autorun')
require('minitest/rg')
require_relative('../medic.rb')

class TestMedic < Minitest::Test

  def setup
    @medic = Medic.new()
  end

  def test_person_can_speak
    assert_equal("Hi I'm Kevin the medic", @medic.speak())
  end

  def test_kevin_heals
    assert_equal("You are now healed, free to enjoy the worlds delightful array of treats.", @medic.heal())
  end

end