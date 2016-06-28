Rails.application.routes.draw do
  get '/chatroom', to: 'chatroom#show'
  post '/chatroom', to: 'chatroom#create'
end
