json.extract! @product, :id, :description, :category_id, :user_id, :title, :price, :rating

json.photos do
    json.array! @product.photos.each do |photo|
      json.photo_image_url url_for(photo)
    end
end
