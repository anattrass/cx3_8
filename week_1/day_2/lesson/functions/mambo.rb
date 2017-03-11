def sing_line(name, phrase)
  return "A little bit of #{name} #{phrase}"
end

def mambo(name)
  case name
    when "Monica"
      sing_line(name, "is what I see")
    when "Erika"
      sing_line(name, "by my side")
    when "Rita"
      sing_line(name, "is all I need")
    when "Tina" 
      sing_line(name, "is what I see")
  end
end
