@reviews.each do |review|
  json.set! review.id do
    json.extract! review, :id, :user_id, :product_id, :rating, :body, :created_at
  end
end
