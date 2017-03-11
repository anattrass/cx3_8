class Bear

  attr_reader :name
  def initialize(name)
    @name = name
    @cupboard = []
  end

  def food_count
    return @cupboard.size
  end

  def go_fishing(river)
    fish = river.get_fish()
    @cupboard << fish
  end

end