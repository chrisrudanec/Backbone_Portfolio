Backbone::Application.routes.draw do
  resources :users, :only => [:show, :index]

  root :to => 'home#index'
end
