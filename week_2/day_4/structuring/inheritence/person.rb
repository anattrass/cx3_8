class Person

  attr_reader :name

  def initialize(name)
    @name = name
  end

  def speak
    return "Hi I'm #{@name}"
  end

end