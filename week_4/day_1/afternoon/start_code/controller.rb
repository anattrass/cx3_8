require('sinatra')
require('sinatra/contrib/all')
require_relative('models/calculator')
require('json')

get '/' do
  return "Sup!"
end

get '/add/:num1/:num2' do
  num1 = params[:num1].to_i
  num2 = params[:num2].to_i
  calculator = Calculator.new(num1, num2)
  @result = calculator.add()
  erb(:result)
end

get '/subtract/:num1/:num2' do
  num1 = params[:num1].to_i
  num2 = params[:num2].to_i
  calculator = Calculator.new(num1, num2)
  @result = calculator.subtract()
  erb(:result)
end

get '/dog' do
  @dog = "Rusty"
  erb(:dog)
end

get '/all/:num1/:num2' do

  num1 = params[:num1].to_i
  num2 = params[:num2].to_i
  calculator = Calculator.new(num1, num2)

  results = {
    add: calculator.add(),
    subtract: calculator.subtract()
  }
  return json(results)
end






