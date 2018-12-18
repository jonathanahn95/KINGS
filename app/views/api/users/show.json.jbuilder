json.user do
  json.set! @user.id do
    json.extract! @user, :id, :fname, :email
  end
end

json.userProducts do
  @products.each do |product|
    json.set! product.id do
      json.extract! product, :id, :title, :price, :description, :category_id, :user_id, :rating
    end
  end
end
