json.category do
  json.extract! @category, :id, :category_name
end

json.products do
  json.set! @category.id do
    @category_products.each do |product|
      json.set! product.id do
        json.extract! product, :id, :title, :price, :description, :category_id, :user_id, :rating
      end
    end
  end
end


json.photos do
  json.set! @category.id do
    @category_products.each do |product|
      json.set! product.id do
        json.array! product.photos.each do |photo|
          json.photo_image_url url_for(photo)
        end
      end
    end
  end
end

json.users do
  json.set! @category.id do
    @category_products.each do |product|
      json.set! product.user.id do
        json.extract! product.user, :id, :fname, :email
      end
    end
  end
end
