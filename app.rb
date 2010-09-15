require 'rubygems'
require 'sinatra'

get '/' do
  haml :index
end

get '/global.css' do
  content_type 'text/css', :charset => 'utf-8' 
  sass :global
end