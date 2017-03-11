# module BethsCrazyArray

#   class Array

#     def length
#       return 100
#     end
#   end
# end

# my_array = BethsCrazyArray::Array.new

# puts my_array.length

# normal_array = Array.new

# puts normal_array.length

# puts Math::PI

# puts Math::sqrt(49)

module BethsCrazyMath


 PI = "A slice of apple pie"

  def BethsCrazyMath.sqrt(num)
    return num * 5
  end

end

puts BethsCrazyMath::PI

puts BethsCrazyMath::sqrt(12)