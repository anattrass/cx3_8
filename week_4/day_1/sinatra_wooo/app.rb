require ('sinatra')
require('sinatra/contrib/all')

get '/' do
  return rand(1..7).to_s
end

get '/name/:title/:first/:last' do
  return "your title is #{params[:title]} #{params[:first]} #{params[:last]}"
end

get '/square/:number' do
  result = params[:number].to_i
  return "#{result * result}"
end