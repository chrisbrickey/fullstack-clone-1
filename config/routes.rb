Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"


  namespace :api, defaults: { format: :json } do

    resources :comments, only: %i[destroy], shallow: true do
      resource :like, only: %i[create destroy]
    end

    resources :follows, only: %i[destroy]

    resources :photos, only: %i[index show create update destroy], shallow: true do
      resources :comments, only: %i[create]
      resource :like, only: %i[create destroy]
    end

    resource :session, only: %i[create destroy]

    resources :users, only: %i[index show create update], shallow: true do
      resources :follows, only: %i[create]
      resources :photos, only: %i[index]
    end
  end


end
