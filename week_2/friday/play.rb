alpacas = ["Lacie", "Rory", "Bendrago"]

# alpacas.each { |a| puts a }

#this is the same sa the mapped shovel one below!
thing = alpacas.map { |a| a.downcase }
puts thing



mapped = []
for alpaca in alpacas
  mapped << alpaca.downcase
end

puts mapped


# for alpaca in alpacas
#   puts alpaca
# end

# counter = 0

# while counter < alpacas.length
#   puts alpacas[counter]
#   counter += 1
# end