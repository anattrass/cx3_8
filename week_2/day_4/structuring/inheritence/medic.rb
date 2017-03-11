require_relative('person')

class Medic < Person


  def initialize
    super("Kevin")
  end

  def speak
    person_speak = super()
    return person_speak + " the medic"
  end

  def heal
    return "You are now healed, free to enjoy the worlds delightful array of treats."
  end

end