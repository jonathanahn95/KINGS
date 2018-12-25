Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'


  namespace :api, defaults: { format: 'json' } do
    delete 'cart_items/checkout/', to: 'cart_items#checkout'
    
      resources :users, only: [:create, :show]
      resources :cart_items, only: [:create, :index, :update, :destroy]
      resource :session, only: [:create, :destroy]
      resources :categories, only: [:index, :show]
      resources :products, only: [:index, :show]
    end

end
