class Category < ApplicationRecord
  validates :category_name, presence: true

  has_many :products

end
