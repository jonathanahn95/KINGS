json.partial! "api/categories/category", category: @category

json.products do
  @category_products.each do |product|
    json.set! product.id do
      json.extract! product, :id, :title, :price, :description, :category_id, :user_id, :rating
    end
  end
end


json.photos do
  @category_products.each do |product|
    json.set! product.id do
      json.array! product.photos.each do |photo|
        json.photo_image_url url_for(photo)
      end
    end
  end
end
