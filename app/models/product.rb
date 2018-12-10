class Product < ApplicationRecord
  validates :title, :description, :price,  presence: true

  has_many_attached :photos
  belongs_to :category
  belongs_to :user
end
