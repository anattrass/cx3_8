require('minitest/autorun')
require('minitest/rg')
require_relative('../person.rb')

class TestPerson < Minitest::Test

  def setup
    @person = Person.new(" ")
  end

  def test_person_can_speak
    assert_equal("Hi I'm  ", @person.speak())
  end


end