require 'rubygems'
require 'sinatra'
require 'haml'
require 'sass'
require 'json'
require 'dm-core'
require 'dm-validations'
require 'dm-migrations' 
require 'dm-timestamps'
require 'dm-serializer'
require 'dm-types'

# Data Model

DataMapper.setup(:default, ENV['DATABASE_URL'] || "sqlite3://#{Dir.pwd}/metro.sqlite3")

class Line
  include DataMapper::Resource
  
  property  :number,      Integer,   :key => true
  property  :name,        String
  property  :color,       String
  property  :created_at,  DateTime
  property  :updated_at,  DateTime
  
  has n, :line_stations
  has n, :stations, :through => :line_stations
  
  has n, :coordinates
  
end

class LineStation
  include DataMapper::Resource
  
  property :id, Serial, :key => true
  belongs_to :line
  belongs_to :station

end

class Station
  include DataMapper::Resource
  
  property :name,         String,     :key => true
  property :size,         Integer
  property :radio,        Integer
  property  :created_at,  DateTime
  property  :updated_at,  DateTime  
  
  has n, :line_stations
  has n, :lines, :through => :line_stations
  
  has 1, :coordinate
  
end

class Coordinate
  include DataMapper::Resource
  
  property :id,   Serial, :key => true
  property :x,    Decimal
  property :y,    Decimal
  property  :created_at,  DateTime
  property  :updated_at,  DateTime
  
end

DataMapper.auto_upgrade!

get '/' do
  haml :index
end

get '/global.css' do
  content_type 'text/css', :charset => 'utf-8' 
  sass :global
end