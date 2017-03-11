Rails.application.routes.draw do
  
  scope path: 'api' do
    resources(:animals)
  end

end
