json.partial! "api/users/user", user: @user

json.user do
  json.partial! "api/users/user", user: @user
end

json.userProducts do
  @products.each do |product|
    json.set! product.id do
      json.extract! product, :id, :title, :price, :description, :category_id, :user_id, :rating
    end
  end
end

json.photos do
  @products.each do |product|
    json.set! product.id do
      json.array! product.photos.each do |photo|
        json.photo_image_url url_for(photo)
      end
    end
  end
end
