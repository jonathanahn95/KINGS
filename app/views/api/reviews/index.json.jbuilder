json.reviews do
  @reviews.each do |review|
    json.set! review.id do
      json.extract! review, :id, :user_id, :product_id, :rating, :body, :created_at
    end
  end
end

json.users do
  @reviews.each do |review|
    json.set! review.user.id do
      json.extract! review.user, :id, :fname, :email
    end
  end
end
