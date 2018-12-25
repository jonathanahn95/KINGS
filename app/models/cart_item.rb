class CartItem < ApplicationRecord
  validates :product_id, :user_id, :quantity, presence: true
  has_many_attached :photos

  belongs_to :user
  belongs_to :product
end
