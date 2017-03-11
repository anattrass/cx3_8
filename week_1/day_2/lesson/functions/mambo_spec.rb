require("minitest/autorun")
require_relative("mambo")

class MamboTest < MiniTest::Test

  def test_mambo_tina
    result = mambo("Tina")
    assert_equal("A little bit of Tina is what I see", result)
  end

  def test_mambo_rita
    result = mambo("Rita")
    assert_equal("A little bit of Rita is all I need", result)
  end

  def test_sing_line_monica
    result = sing_line("Monica", "in my life")
    assert_equal("A little bit of Monica in my life", result)
  end

end