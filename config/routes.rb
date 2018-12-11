Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'


  namespace :api, defaults: { format: 'json' } do
      resources :users, only: [:create, :show, :index]
      resource :session, only: [:create, :destroy]
      resources :categories, only: [:index, :show] do
        resources :products, only: [:index]
      end
      resources :products, only: [:index]
    end

end
