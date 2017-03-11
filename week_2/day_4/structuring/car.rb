require_relative('vehicle')

class Car < Vehicle

  attr_accessor :model 

  def initialize(model, engine)
    super(4)
    @model = model
    @engine = engine
  end

  def start_engine
    return @engine.start()
  end

end