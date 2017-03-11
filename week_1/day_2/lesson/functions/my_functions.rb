def my_song()
  song = "Oops I did it again"
  return song
end

def not_my_song()
  song = "What is Love?"
  return song
end

def song(band, title)
  puts "this is " + title + " by: " + band
end

band = "Britney Spears"
song = "Toxic"
song(band, song)
