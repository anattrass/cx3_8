def add_result(array1, array2)
return array1.length() + array2.length()
end

def sum_of_array(array)
  total = 0
  for number in array
    total += number
  end
  return total
end

def find_item?(house_name, hogwarts)
  for house in hogwarts
    puts house
   return true if (house_name == house)
  end
  return false
end


def first_key_name(teachers_wallets)
  all_keys = teachers_wallets.keys
  first_key= all_keys[0]
  return first_key
end

def first_level_hash_values(countries, capital_city)
  result = []

  for key,value in countries
    item = value[capital_city]
    result.push(item)
  end

  return result
end