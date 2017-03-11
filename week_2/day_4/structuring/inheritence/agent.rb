require_relative('person')

class Agent < Person


  def initialize
    super("Trevor")
  end

  def speak
    person_speak = super()
    return person_speak + ", #{name} Murdoch"
  end

end