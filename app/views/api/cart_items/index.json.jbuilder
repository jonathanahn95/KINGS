json.items do
  @shopping_cart_items.each do |item|
    json.set! item.product.id do
      json.extract! item, :user_id, :product_id, :quantity, :id
      json.name item.product.title
      json.price item.product.price
      json.description item.product.description
    end
  end
end

json.photos do
  @shopping_cart_items.each do |item|
    json.set! item.product.id do
      json.array! item.product.photos.each do |photo|
        json.photo_image_url url_for(photo)
      end
    end
  end
end
