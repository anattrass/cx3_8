require( 'sinatra' )
require( 'sinatra/contrib/all' )
require( 'pry-byebug' )
require_relative('models/pizza')

#All the pizzas
get '/pizzas' do
  @pizzas = Pizza.all
  erb(:index)
end

#make a new pizza with a form
get '/pizzas/new' do
  erb(:new)
end

#actually create a pizza in the db
post '/pizzas' do
  pizza = Pizza.new( params )
  pizza.save
  redirect to('/pizzas')
end

#delete a pizza from the db
post '/pizzas/:id/delete' do
  Pizza.destroy( params[:id] )
end

#show a pizza by id
get '/pizzas/:id' do
  @pizza = Pizza.find( params[:id] )
  erb(:show)
end

#show the edit pizza form
get '/pizzas/:id/edit' do
  @pizza = Pizza.find( params[:id] )
  erb(:edit)
end

#update a pizza
post '/pizzas/:id' do
  Pizza.update( params )
  redirect to("/pizzas/#{params[:id]}")
end






