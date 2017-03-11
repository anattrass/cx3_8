Rails.application.routes.draw do
  devise_for :users
  get 'accounts' => 'accounts#index'
end
