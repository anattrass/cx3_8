Rails.application.routes.draw do

 # scope path: 'api' do
 #   resources(:artists)
 # end

 resources :artists do
  resources :gigs
 end

end
