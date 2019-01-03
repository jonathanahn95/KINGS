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
  {fname: 'Jonathan', email: "jonathan@gmail.com", password: 123123}
  ])
users = User.all


Category.create!([
  {category_name: 'Entertainment'},
  {category_name: 'Art'},
  {category_name: 'Sports'},
  {category_name: 'Clothes'},
  {category_name: 'Jewerly'},
  {category_name: 'Vehicles'},
  {category_name: 'Household'},
  {category_name: 'Electronics'}
  ])
categories = Category.all

Product.create!([
  {rating: 5, description: 'This is the best gift I ever got', title: 'Necklace', price: 102.74, category_id: categories[4].id, user_id: users[1].id, style: 1, shipping: 1, location: 2, cost: 1, sale: 1},
  {rating: 5, description: 'I LOVE THESE EARRINGS', title: 'Earrings', price: 35.99, category_id: categories[4].id, user_id: users[0].id, style: 1, shipping: 0, location: 2, cost: 2, sale: 1},
  {rating: 5, description: 'Daddy Necklace to wear around your neck to remember', title: 'Daddy Necklace', price: 35.99, category_id: categories[4].id, user_id: users[0].id, style: 2, shipping: 2, location: 2, cost: 3, sale: 1},
  {rating: 5, description: 'Bracelet', title: 'Bracelet', price: 88.00, category_id: categories[4].id, user_id: users[0].id, style: 2, shipping: 0, location: 1, cost: 4},
  {rating: 5, description: 'Earring2', title: 'Earrings', price: 49.99, category_id: categories[4].id, user_id: users[0].id, style: 2, shipping: 1, location: 2, cost: 1},
  {rating: 5, description: 'Thank you for these', title: 'Pearl', price: 35.99, category_id: categories[4].id, user_id: users[0].id, style: 1, shipping: 0, location: 1, cost: 2},
  {rating: 5, description: 'Wear these beautiful rings out and feel amazing', title: 'Many Rings', price: 50.00, category_id: categories[4].id, user_id: users[0].id, style: 2, shipping: 0, location: 1, cost: 3, sale: 1},
  {rating: 5, description: 'Leaf Earrings that come down your ear', title: 'Leaf Earrings', price: 24.99, category_id: categories[4].id, user_id: users[0].id, style: 1, shipping: 1, location: 2, cost: 4},
  {rating: 5, description: 'Skullies that will make you look like you have the real thing around your neck', title: 'Skull Necklace', price: 35.99, category_id: categories[4].id, user_id: users[0].id, style: 2, shipping: 1, location: 1, cost: 1, sale: 1},
  {rating: 5, description: 'These long earrings are gorgeous', title: 'Long Earrings', price: 15.00, category_id: categories[4].id, user_id: users[0].id, style: 1, shipping: 0, location: 1, cost: 2},
  {rating: 5, description: 'Awesome jesus pieces', title: 'Jesus Piece Necklace', price: 8.99, category_id: categories[4].id, user_id: users[0].id, style: 1, shipping: 2, location: 2, cost: 3, sale: 1},
  {rating: 5, description: 'Buy this set of many bracelets', title: 'Bracelets', price: 7.99, category_id: categories[4].id, user_id: users[0].id, style: 2, shipping: 0, location: 1, cost: 4},
  {rating: 5, description: 'Women Shoe', title: 'Women Shoe', price: 25.00, category_id: categories[3].id, user_id: users[0].id, style: 2, shipping: 1, location: 1, cost: 1, sale: 1},
  {rating: 5, description: 'Supreme', title: 'Supreme Clothing', price: 75.99, category_id: categories[3].id, user_id: users[0].id, style: 1, shipping: 2, location: 2, cost: 2},
  {rating: 5, description: 'Supreme', title: 'Supreme Clothing', price: 75.99, category_id: categories[3].id, user_id: users[0].id, style: 1, shipping: 0, location: 2, cost: 3, sale: 1},
  {rating: 5, description: 'Gucci', title: 'Gucci', price: 135.99, category_id: categories[3].id, user_id: users[0].id, style: 2, shipping: 1, location: 1, cost: 4},
  {rating: 5, description: 'Supreme3', title: 'Supreme Clothing', price: 15.00, category_id: categories[3].id, user_id: users[0].id, style: 1, shipping: 0, location: 2, cost: 1, sale: 1},
  {rating: 5, description: 'Polo', title: 'Polo Shirt', price: 35.99, category_id: categories[3].id, user_id: users[0].id, style: 2, shipping: 0, location: 1, cost: 1},
  {rating: 5, description: 'Dress', title: 'Dress', price: 29.99, category_id: categories[3].id, user_id: users[0].id, style: 1, shipping: 2, location: 1, cost: 2, sale: 1},
  {rating: 5, description: 'Chanel', title: 'Chanel', price: 23.00, category_id: categories[3].id, user_id: users[0].id, style: 2, shipping: 0, location: 2, cost: 3},
  {rating: 5, description: 'Belt', title: 'Belt', price: 100.00, category_id: categories[3].id, user_id: users[0].id, style: 1, shipping: 1, location: 1, cost: 4, sale: 1},
  {rating: 5, description: 'Pea Coat', title: 'Pea Coat', price: 150.00, category_id: categories[3].id, user_id: users[0].id, style: 2, shipping: 1, location: 2, cost: 1},
  {rating: 5, description: 'Pea Coat2', title: 'Pea Coat', price: 35.99, category_id: categories[3].id, user_id: users[0].id, style: 1, shipping: 2, location: 2, cost: 2},
  {rating: 5, description: 'Custom made nike show', title: 'Shoe', price: 90.00, category_id: categories[3].id, user_id: users[0].id, style: 2, shipping: 2, location: 1, cost: 3, sale: 1},
  {rating: 5, description: 'Art 1', title: 'Art', price: 20.00, category_id: categories[1].id, user_id: users[0].id, style: 1, shipping: 1, location: 1, cost: 4},
  {rating: 5, description: 'Art 2', title: 'Art', price: 35.99, category_id: categories[1].id, user_id: users[1].id, style: 2, shipping: 0, location: 1, cost: 1, sale: 1},
  {rating: 5, description: 'Art 3', title: 'Art', price: 33.00, category_id: categories[1].id, user_id: users[0].id, style: 1, shipping: 1, location: 1, cost: 2, sale: 1},
  {rating: 5, description: 'Art 4', title: 'Art', price: 12.00, category_id: categories[1].id, user_id: users[1].id, style: 2, shipping: 1, location: 2, cost: 3},
  {rating: 5, description: 'Art 5', title: 'Art', price: 5.00, category_id: categories[1].id, user_id: users[0].id, style: 1, shipping: 0, location: 2, cost: 4},
  {rating: 5, description: 'Art 6', title: 'Art', price: 65.00, category_id: categories[1].id, user_id: users[1].id, style: 2, shipping: 0, location: 1, cost: 1, sale: 1},
  {rating: 5, description: 'Art 7', title: 'Art', price: 79.99, category_id: categories[1].id, user_id: users[0].id, style: 1, shipping: 2, location: 1, cost: 2},
  {rating: 5, description: 'Art 8', title: 'Art', price: 50.00, category_id: categories[1].id, user_id: users[1].id, style: 2, shipping: 0, location: 1, cost: 3, sale: 1},
  {rating: 5, description: 'Art 9', title: 'Art', price: 22.25, category_id: categories[1].id, user_id: users[0].id, style: 1, shipping: 2, location: 2, cost: 4},
  {rating: 5, description: 'Art 10', title: 'Art', price: 150.50, category_id: categories[1].id, user_id: users[0].id, style: 2, shipping: 0, location: 2, cost: 1, sale: 1},
  {rating: 5, description: 'Art 11', title: 'Art', price: 300.00, category_id: categories[1].id, user_id: users[0].id, style: 2, shipping: 1, location: 1, cost: 2},
  {rating: 5, description: 'Art 12', title: 'Art', price: 12.00, category_id: categories[1].id, user_id: users[0].id, style: 2, shipping: 0, location: 2, cost: 3, sale: 1},
  {rating: 5, description: 'Electronics', title: 'Electronics', price: 57.00, category_id: categories[7].id, user_id: users[0].id, style: 1, shipping: 1, location: 1, cost: 4, sale: 1},
  {rating: 5, description: 'Electronics2', title: 'Electronics', price: 20.00, category_id: categories[7].id, user_id: users[0].id, style: 1, shipping: 1, location: 1, cost: 1},
  {rating: 5, description: 'Electronics3', title: 'Electronics', price: 59.99, category_id: categories[7].id, user_id: users[0].id, style: 1, shipping: 0, location: 1, cost: 2, sale: 1},
  {rating: 5, description: 'Electronics4', title: 'Electronics', price: 85.00, category_id: categories[7].id, user_id: users[0].id, style: 2, shipping: 0, location: 1, cost: 3},
  {rating: 5, description: 'Electronics5', title: 'Electronics', price: 75.70, category_id: categories[7].id, user_id: users[0].id, style: 2, shipping: 2, location: 2, cost: 4, sale: 1},
  {rating: 5, description: 'Electronics6', title: 'Electronics', price: 315.50, category_id: categories[7].id, user_id: users[0].id, style: 1, shipping: 0, location: 2, cost: 1},
  {rating: 5, description: 'Electronics7', title: 'Electronics', price: 299.00, category_id: categories[7].id, user_id: users[0].id, style: 1, shipping: 2, location: 2, cost: 2, sale: 1},
  {rating: 5, description: 'Electronics8', title: 'Electronics', price: 214.00, category_id: categories[7].id, user_id: users[0].id, style: 2, shipping: 0, location: 2, cost: 3},
  {rating: 5, description: 'Electronics9', title: 'Electronics', price: 77.00, category_id: categories[7].id, user_id: users[0].id, style: 1, shipping: 2, location: 2, cost: 4},
  {rating: 5, description: 'Electronics10', title: 'Electronics', price: 22.25, category_id: categories[7].id, user_id: users[0].id, style: 2, shipping: 1, location: 1, cost: 1, sale: 1},
  {rating: 5, description: 'Electronics11', title: 'Electronics', price: 18.75, category_id: categories[7].id, user_id: users[0].id, style: 1, shipping: 0, location: 1, cost: 2, sale: 1},
  {rating: 5, description: 'Electronics12', title: 'Electronics', price: 91.90, category_id: categories[7].id, user_id: users[0].id, style: 2, shipping: 2, location: 2, cost: 3, sale: 1},
  {rating: 5, description: 'Sports1', title: 'Sports', price: 69.99, category_id: categories[2].id, user_id: users[0].id, style: 1, shipping: 1, location: 2, cost: 4},
  {rating: 5, description: 'Sports2', title: 'Sports', price: 35.99, category_id: categories[2].id, user_id: users[0].id, style: 1, shipping: 0, location: 2, cost: 1, sale: 1},
  {rating: 5, description: 'Sports3', title: 'Sports', price: 39.99, category_id: categories[2].id, user_id: users[0].id, style: 1, shipping: 1, location: 2, cost: 2, sale: 1},
  {rating: 5, description: 'Sports4', title: 'Sports', price: 75.00, category_id: categories[2].id, user_id: users[0].id, style: 1, shipping: 0, location: 1, cost: 3},
  {rating: 5, description: 'Sports5', title: 'Sports', price: 9.75, category_id: categories[2].id, user_id: users[0].id, style: 1, shipping: 2, location: 1, cost: 4, sale: 1},
  {rating: 5, description: 'Sports6', title: 'Sports', price: 15.50, category_id: categories[2].id, user_id: users[0].id, style: 2, shipping: 0, location: 2, cost: 1},
  {rating: 5, description: 'Sports7', title: 'Sports', price: 20.00, category_id: categories[2].id, user_id: users[0].id, style: 2, shipping: 1, location: 2, cost: 2, sale: 1},
  {rating: 5, description: 'Sports8', title: 'Sports', price: 69.10, category_id: categories[2].id, user_id: users[0].id, style: 2, shipping: 0, location: 1, cost: 3},
  {rating: 5, description: 'Sports9', title: 'Sports', price: 35.99, category_id: categories[2].id, user_id: users[0].id, style: 2, shipping: 1, location: 1, cost: 4, sale: 1},
  {rating: 5, description: 'Sports10', title: 'Sports', price: 16.75, category_id: categories[2].id, user_id: users[0].id, style: 1, shipping: 0, location: 1, cost: 1, sale: 1},
  {rating: 5, description: 'Sports12', title: 'Sports', price: 20.00, category_id: categories[2].id, user_id: users[0].id, style: 2, shipping: 2, location: 2, cost: 2},
  {rating: 5, description: 'Sports11', title: 'Sports', price: 102.74, category_id: categories[2].id, user_id: users[0].id, style: 1, shipping: 0, location: 1, cost: 3, sale: 1}
  ])

sort_products = Product.all.sort

prod = sort_products[0]
prod1 = sort_products[1]
prod2 = sort_products[2]
prod3 = sort_products[3]
prod4 = sort_products[4]
prod5 = sort_products[5]
prod6 = sort_products[6]
prod7 = sort_products[7]
prod8 = sort_products[8]
prod9 = sort_products[9]
prod10 = sort_products[10]
prod11 = sort_products[11]
prod12 = sort_products[12]
prod13 = sort_products[13]
prod14 = sort_products[14]
prod15 = sort_products[15]
prod16 = sort_products[16]
prod17 = sort_products[17]
prod18 = sort_products[18]
prod19 = sort_products[19]
prod20 = sort_products[20]
prod21 = sort_products[21]
prod22 = sort_products[22]
prod23 = sort_products[23]
prod24 = sort_products[24]
prod25 = sort_products[25]
prod26 = sort_products[26]
prod27 = sort_products[27]
prod28 = sort_products[28]
prod29 = sort_products[29]
prod30 = sort_products[30]
prod31 = sort_products[31]
prod32 = sort_products[32]
prod33 = sort_products[33]
prod34 = sort_products[34]
prod35 = sort_products[35]
prod36 = sort_products[36]
prod37 = sort_products[37]
prod38 = sort_products[38]
prod39 = sort_products[39]
prod40 = sort_products[40]
prod41 = sort_products[41]
prod42 = sort_products[42]
prod43 = sort_products[43]
prod44 = sort_products[44]
prod45 = sort_products[45]
prod46 = sort_products[46]
prod47 = sort_products[47]
prod48 = sort_products[48]
prod49 = sort_products[49]
prod50 = sort_products[50]
prod51 = sort_products[51]
prod52 = sort_products[52]
prod53 = sort_products[53]
prod54 = sort_products[54]
prod55 = sort_products[55]
prod56 = sort_products[56]
prod57 = sort_products[57]
prod58 = sort_products[58]
prod59 = sort_products[59]

add_photo(Product, prod.id, "https://s3.amazonaws.com/kings-2-dev/necklage.png", "necklage.png")
add_photo(Product, prod1.id, "https://s3.amazonaws.com/kings-2-dev/earring1.png", "earring1.png")
add_photo(Product, prod2.id, "https://s3.amazonaws.com/kings-2-dev/daddy.png", "daddy.png")
add_photo(Product, prod3.id, "https://s3.amazonaws.com/kings-2-dev/bracelet.png", "braclet.png")
add_photo(Product, prod4.id, "https://s3.amazonaws.com/kings-2-dev/earring2.png", "earring2.png")
add_photo(Product, prod5.id, "https://s3.amazonaws.com/kings-2-dev/pearl.png", "pearl.png")
add_photo(Product, prod6.id, "https://s3.amazonaws.com/kings-2-dev/many_rings.png", "many_rings.png")
add_photo(Product, prod7.id, "https://s3.amazonaws.com/kings-2-dev/leaf_earrings.png", "leaf_earrings.png")
add_photo(Product, prod8.id, "https://s3.amazonaws.com/kings-2-dev/skull_necklace.png", "skull_necklace.png")
add_photo(Product, prod9.id, "https://s3.amazonaws.com/kings-2-dev/long_earring.png", "long_earring.png")
add_photo(Product, prod10.id, "https://s3.amazonaws.com/kings-2-dev/jesus_piece.png", "jesus_piece.png")
add_photo(Product, prod11.id, "https://s3.amazonaws.com/kings-2-dev/many_bracelets.png", "many_bracelets.png")
add_photo(Product, prod12.id, "https://s3.amazonaws.com/kings-2-dev/women_shoe.png", "women_shoe.png")
add_photo(Product, prod13.id, "https://s3.amazonaws.com/kings-2-dev/supreme2.png", "supreme2.png")
add_photo(Product, prod14.id, "https://s3.amazonaws.com/kings-2-dev/supreme1.png", "supreme1.png")
add_photo(Product, prod15.id, "https://s3.amazonaws.com/kings-2-dev/gucci1.png", "gucci1.png")
add_photo(Product, prod16.id, "https://s3.amazonaws.com/kings-2-dev/supreme3.png", "supreme3.png")
add_photo(Product, prod17.id, "https://s3.amazonaws.com/kings-2-dev/polo.png", "polo.png")
add_photo(Product, prod18.id, "https://s3.amazonaws.com/kings-2-dev/dress.png", "dress.png")
add_photo(Product, prod19.id, "https://s3.amazonaws.com/kings-2-dev/chanel.png", "chanel.png")
add_photo(Product, prod20.id, "https://s3.amazonaws.com/kings-2-dev/belt.png", "belt.png")
add_photo(Product, prod21.id, "https://s3.amazonaws.com/kings-2-dev/pea1.png", "pea1.png")
add_photo(Product, prod22.id, "https://s3.amazonaws.com/kings-2-dev/pea.png", "pea.png")
add_photo(Product, prod23.id, "https://s3.amazonaws.com/kings-2-dev/nike_shoe.png", "nike_shoe.png")
add_photo(Product, prod24.id, "https://s3.amazonaws.com/kings-2-dev/art1.png", "art1.png")
add_photo(Product, prod25.id, "https://s3.amazonaws.com/kings-2-dev/art2.png", "art2.png")
add_photo(Product, prod26.id, "https://s3.amazonaws.com/kings-2-dev/art3.png", "art3.png")
add_photo(Product, prod27.id, "https://s3.amazonaws.com/kings-2-dev/art4.png", "art4.png")
add_photo(Product, prod28.id, "https://s3.amazonaws.com/kings-2-dev/art5.png", "art5.png")
add_photo(Product, prod29.id, "https://s3.amazonaws.com/kings-2-dev/art6.png", "art6.png")
add_photo(Product, prod30.id, "https://s3.amazonaws.com/kings-2-dev/art7.png", "art7.png")
add_photo(Product, prod31.id, "https://s3.amazonaws.com/kings-2-dev/art8.png", "art8.png")
add_photo(Product, prod32.id, "https://s3.amazonaws.com/kings-2-dev/art9.png", "art9.png")
add_photo(Product, prod33.id, "https://s3.amazonaws.com/kings-2-dev/art10.png", "art10.png")
add_photo(Product, prod34.id, "https://s3.amazonaws.com/kings-2-dev/art11.png", "art11.png")
add_photo(Product, prod35.id, "https://s3.amazonaws.com/kings-2-dev/art12.png", "art12.png")
add_photo(Product, prod36.id, "https://s3.amazonaws.com/kings-2-dev/elec.png", "elec.png")
add_photo(Product, prod37.id, "https://s3.amazonaws.com/kings-2-dev/elec1.png", "elec1.png")
add_photo(Product, prod38.id, "https://s3.amazonaws.com/kings-2-dev/elec2.png", "elec2.png")
add_photo(Product, prod39.id, "https://s3.amazonaws.com/kings-2-dev/elec3.png", "elec3.png")
add_photo(Product, prod40.id, "https://s3.amazonaws.com/kings-2-dev/elec4.png", "elec4.png")
add_photo(Product, prod41.id, "https://s3.amazonaws.com/kings-2-dev/elec5.png", "elec5.png")
add_photo(Product, prod42.id, "https://s3.amazonaws.com/kings-2-dev/elec6.png", "elec6.png")
add_photo(Product, prod43.id, "https://s3.amazonaws.com/kings-2-dev/elec7.png", "elec7.png")
add_photo(Product, prod44.id, "https://s3.amazonaws.com/kings-2-dev/elec8.png", "elec8.png")
add_photo(Product, prod45.id, "https://s3.amazonaws.com/kings-2-dev/elec9.png", "elec9.png")
add_photo(Product, prod46.id, "https://s3.amazonaws.com/kings-2-dev/elec10.png", "elec10.png")
add_photo(Product, prod47.id, "https://s3.amazonaws.com/kings-2-dev/elec11.png", "elec11.png")
add_photo(Product, prod48.id, "https://s3.amazonaws.com/kings-2-dev/sports1.png", "sports1.png")
add_photo(Product, prod49.id, "https://s3.amazonaws.com/kings-2-dev/sports2.png", "sports2.png")
add_photo(Product, prod50.id, "https://s3.amazonaws.com/kings-2-dev/sports3.png", "sports3.png")
add_photo(Product, prod51.id, "https://s3.amazonaws.com/kings-2-dev/sports4.png", "sports4.png")
add_photo(Product, prod52.id, "https://s3.amazonaws.com/kings-2-dev/sports5.png", "sports5.png")
add_photo(Product, prod53.id, "https://s3.amazonaws.com/kings-2-dev/sports6.png", "sports6.png")
add_photo(Product, prod54.id, "https://s3.amazonaws.com/kings-2-dev/sports7.png", "sports7.png")
add_photo(Product, prod55.id, "https://s3.amazonaws.com/kings-2-dev/sports8.png", "sports8.png")
add_photo(Product, prod56.id, "https://s3.amazonaws.com/kings-2-dev/sports9.png", "sports9.png")
add_photo(Product, prod57.id, "https://s3.amazonaws.com/kings-2-dev/sports10.png", "sports10.png")
add_photo(Product, prod58.id, "https://s3.amazonaws.com/kings-2-dev/sports11.png", "sports11.png")
add_photo(Product, prod59.id, "https://s3.amazonaws.com/kings-2-dev/sports12.png", "sports12.png")
