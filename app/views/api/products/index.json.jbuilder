@products.each do |product|
  json.set! product.id do
    json.extract! product, :id, :title, :price, :description, :category_id, :user_id
  end
end
