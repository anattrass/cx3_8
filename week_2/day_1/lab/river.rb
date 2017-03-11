class River

  def initialize(fishes)
    @fishes = fishes
  end

  def number_of_fish()
    return @fishes.length()
  end

  def get_fish()
    return @fishes.pop()
  end

end