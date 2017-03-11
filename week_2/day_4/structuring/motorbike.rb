require_relative('vehicle')

class Motorbike < Vehicle

  def initialize(engine)
    super(2)
    @engine = engine
  end

  def start_engine
    return @engine.start()
  end

  # def start_engine
  #   vehicle_start = super()
  #   return vehicle_start + " (I'm a motorbike) HELL YEAH"
  # end


end