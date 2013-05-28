Backbone::Application.routes.draw do
  devise_for :users

  resources :users, :only => [:show, :index, :update] do
    member do
      get :followers
    end

    collection do
      get :me
    end

    resources :projects, :only => [:create, :index, :update, :destroy]
  end

  root :to => 'home#index'
end
