def bakery_name(name_of_bakery)
return name_of_bakery[:name]
end

def bakes_by_type(bakery, type)

result = []

for bake in bakery[:baked_goods]
result << bake if bake[:type] == type
end

return result

end