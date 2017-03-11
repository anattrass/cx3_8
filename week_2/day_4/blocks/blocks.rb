# numbers = [1, 2, 3, 4]

# def add_one(items)
# result = []
#   for item in items
#     result << item + 1
#   end
#   return result
# end

# print add_one(numbers)

# def multiply_by_two(items)
# result = []
#   for item in items
#     result << item * 2
#   end
#   return result
# end

# print multiply_by_two(numbers)

# def my_block()
#   return yield
# end

#   puts my_block() { 1 + 2 }


# def my_param_block(punctuation)
#   greeting = "Hello, "
#   return yield(greeting) + punctuation
# end


# puts my_param_block("!!!") { |word| word + "Adam" }

numbers = [1, 2, 3, 4]


def map_function(items)
result = []
  for item in items
    result << yield(item)
  end
  return result
end

# print map_function(numbers) { |num| num * 5 }

numbers.each do |x| 
  puts x * 5 
  puts x * 9
  puts "super"
  puts x + 3000
end

# print numbers

# def each_function(array)
#   for item in array
#     yield(item)
#   end
# end

# each_function(numbers) { |num| puts num + 1 }


# numbers.each() { |num| puts num + 1 }

