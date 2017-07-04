Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'films#film_select'

  get 'films/film_select'

  get 'films/dev_select'

  get 'films/iso_select'


  post '/dev_select', to: 'films#dev_select'

  post '/iso_select', to: 'films#iso_select'

  post '/index', to: 'films#index'


end
