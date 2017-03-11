score = gets.chomp().to_i()

result = case score
  when 10
    "genius"
  when 7..9
    "merit"
  when 4..6
    "pass"
  else
    "fail"
end

puts result