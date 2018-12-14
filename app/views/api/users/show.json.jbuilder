json.partial! "api/users/user", user: @user

json.products do
  @products.each do |product|
    json.set! product.id do
      json.extract! product, :id, :title, :price, :description, :category_id, :user_id, :rating
        json.photos do
          json.array! @products.each do |product|
            product.photos.each do |photo|
            json.photo_image_url url_for(photo)
          end
        end
      end
    end
  end
end
