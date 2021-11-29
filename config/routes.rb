Rails.application.routes.draw do
  resources :recipes
  resources :users
  get "/hello", to: "application#hello_world"
end
