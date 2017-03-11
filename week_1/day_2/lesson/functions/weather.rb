require ('date')

def weather(current_weather, day="Monday")
  puts "It will be #{current_weather} on #{day}"
end

weather("sunny", DateTime.now) 