Foodtrucks::Application.routes.draw do
  root 'welcome#index'

  resources :trucks

  get '/all' => 'trucks#all'

  get '/edit_truck' => 'trucks#edit_truck'

  post '/update_truck' => 'trucks#update_truck'

end
