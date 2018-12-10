# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Category.destroy_all
Product.destroy_all



def add_photo(model, id, link, filename)
  model_instance = model.find(id)
  file = EzDownload.open(link)
  model_instance.photos.attach(io: file, filename: filename)
  model_instance.save!
end


User.create!([
  {fname: 'Guest', email: "guest@demo.org", password: 123123},
  ])
users = User.all


Category.create!([
  {category_name: 'Entertainment'},
  {category_name: 'Pets'},
  {category_name: 'Food'},
  {category_name: 'Clothes'},
  {category_name: 'Jewerly'},
  {category_name: 'Vehicles'},
  {category_name: 'Household'},
  {category_name: 'Electronics'}
  ])
categories = Category.all

Product.create!([
  {rating: 5, description: 'This is the best gift I ever got', title: 'Necklace', price: 35.99, category_id: categories[0].id, user_id: users[0].id},
  {rating: 5, description: 'I LOVE THESE EARRINGS', title: 'Earrings', price: 35.99, category_id: categories[0].id, user_id: users[0].id},
  {rating: 5, description: 'Heavy ring', title: 'Ring', price: 35.99, category_id: categories[0].id, user_id: users[0].id},
  {rating: 5, description: 'Two chains', title: 'Chain', price: 35.99, category_id: categories[0].id, user_id: users[0].id},
  {rating: 5, description: '1 chain', title: 'Chain', price: 35.99, category_id: categories[0].id, user_id: users[0].id},
  {rating: 5, description: 'Thank you for these', title: 'Pearl', price: 35.99, category_id: categories[0].id, user_id: users[0].id},
  {rating: 5, description: 'Thank you for these', title: 'Pearl', price: 35.99, category_id: categories[0].id, user_id: users[0].id},
  {rating: 5, description: 'Thank you for these', title: 'Pearl', price: 35.99, category_id: categories[0].id, user_id: users[0].id}
  ])


necklace = Product.all[0]
necklace1 = Product.all[1]
necklace2 = Product.all[2]
necklace3 = Product.all[3]
necklace4 = Product.all[4]
necklace5 = Product.all[5]
necklace6 = Product.all[6]
necklace7 = Product.all[7]

add_photo(Product, necklace.id, "https://s3.amazonaws.com/kings-2-dev/necklage.png", "necklage.png")
add_photo(Product, necklace1.id, "https://s3.amazonaws.com/kings-2-dev/necklage2.png", "necklage.png")
add_photo(Product, necklace2.id, "https://s3.amazonaws.com/kings-2-dev/necklage2.png", "necklage.png")
add_photo(Product, necklace3.id, "https://s3.amazonaws.com/kings-2-dev/necklage2.png", "necklage.png")
add_photo(Product, necklace4.id, "https://s3.amazonaws.com/kings-2-dev/necklage2.png", "necklage.png")
add_photo(Product, necklace5.id, "https://s3.amazonaws.com/kings-2-dev/necklage2.png", "necklage.png")
add_photo(Product, necklace6.id, "https://s3.amazonaws.com/kings-2-dev/necklage2.png", "necklage.png")
add_photo(Product, necklace7.id, "https://s3.amazonaws.com/kings-2-dev/necklage2.png", "necklage.png")
