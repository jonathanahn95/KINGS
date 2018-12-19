class Product < ApplicationRecord
  validates :title, :description, :price,  presence: true

  has_many_attached :photos
  has_many :cart_items

  belongs_to :category
  belongs_to :user
end
