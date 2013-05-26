Backbone::Application.routes.draw do
  devise_for :users

  resources :users, :only => [:show, :index] do
    resources :projects, :only => [:create, :index, :update, :destroy]
  end

  root :to => 'home#index'
end
