Backbone::Application.routes.draw do
  resources :users, :only => [:show, :index] do
    resources :projects, :only => [:create, :index, :update, :destroy]
  end

  root :to => 'home#index'
end
