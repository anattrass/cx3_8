class User < ActiveRecord::Base

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_many :favourite_shows
  has_many :favourites, through: :favourite_shows, source: :show
end
