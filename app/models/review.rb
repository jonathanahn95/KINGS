class Review < ApplicationRecord
  validates :user_id, :product_id, :rating, :body, presence: true


  belongs_to :user
  belongs_to :product
end
