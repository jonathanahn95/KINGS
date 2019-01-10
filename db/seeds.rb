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
  {fname: 'Jonathan', email: "jonathan@gmail.com", password: 123123},
  {fname: 'Tyrion', email: "tyrion@gmail.com", password: 123123},
  {fname: 'Cersei', email: "cersei@gmail.com", password: 123123},
  {fname: 'Obama', email: "obama@gmail.com", password: 123123},
  {fname: 'Kobe', email: "kobe@gmail.com", password: 123123},
  {fname: 'Kevin', email: "kevin@gmail.com", password: 123123},
  {fname: 'Steve', email: "steve@gmail.com", password: 123123},
  {fname: 'Bob', email: "Bob@gmail.com", password: 123123},
  ])
users = User.all


Category.create!([
  {category_name: 'Children'},
  {category_name: 'Art'},
  {category_name: 'Sports'},
  {category_name: 'Clothes'},
  {category_name: 'Jewelry'},
  {category_name: 'Garden'},
  {category_name: 'Kitchen'},
  {category_name: 'Electronics'}
  ])
categories = Category.all

Product.create!([
  {rating: 5, description: 'This is the best gift I ever got', title: 'Necklace', price: 102.74, category_id: categories[4].id, user_id: users[1].id, style: 1, shipping: 1, location: 2, cost: 1, sale: 1},
  {rating: 5, description: 'I LOVE THESE EARRINGS', title: 'Earrings', price: 35.99, category_id: categories[4].id, user_id: users[0].id, style: 1, shipping: 0, location: 2, cost: 2, sale: 1},
  {rating: 5, description: 'Daddy Necklace to wear around your neck to remember', title: 'Daddy Necklace', price: 35.99, category_id: categories[4].id, user_id: users[2].id, style: 2, shipping: 2, location: 2, cost: 3, sale: 1},
  {rating: 5, description: 'Bracelet', title: 'Bracelet', price: 88.00, category_id: categories[4].id, user_id: users[3].id, style: 2, shipping: 0, location: 1, cost: 4},
  {rating: 5, description: 'Earring2', title: 'Earrings', price: 49.99, category_id: categories[4].id, user_id: users[4].id, style: 2, shipping: 1, location: 2, cost: 1},
  {rating: 5, description: 'Thank you for these', title: 'Pearl', price: 35.99, category_id: categories[4].id, user_id: users[5].id, style: 1, shipping: 0, location: 1, cost: 2},
  {rating: 5, description: 'Wear these beautiful rings out and feel amazing', title: 'Many Rings', price: 50.00, category_id: categories[4].id, user_id: users[6].id, style: 2, shipping: 0, location: 1, cost: 3, sale: 1},
  {rating: 5, description: 'Leaf Earrings that come down your ear', title: 'Leaf Earrings', price: 24.99, category_id: categories[4].id, user_id: users[7].id, style: 1, shipping: 1, location: 2, cost: 4},
  {rating: 5, description: 'Skullies that will make you look like you have the real thing around your neck', title: 'Skull Necklace', price: 35.99, category_id: categories[4].id, user_id: users[8].id, style: 2, shipping: 1, location: 1, cost: 1, sale: 1},
  {rating: 5, description: 'These long earrings are gorgeous', title: 'Long Earrings', price: 15.00, category_id: categories[4].id, user_id: users[0].id, style: 1, shipping: 0, location: 1, cost: 2},
  {rating: 5, description: 'Awesome jesus pieces', title: 'Jesus Piece Necklace', price: 8.99, category_id: categories[4].id, user_id: users[1].id, style: 1, shipping: 2, location: 2, cost: 3, sale: 1},
  {rating: 5, description: 'Buy this set of many bracelets', title: 'Bracelets', price: 7.99, category_id: categories[4].id, user_id: users[2].id, style: 2, shipping: 0, location: 1, cost: 4},
  {rating: 5, description: 'Women Shoe', title: 'Women Shoe', price: 25.00, category_id: categories[3].id, user_id: users[3].id, style: 2, shipping: 1, location: 1, cost: 1, sale: 1},
  {rating: 5, description: 'Supreme', title: 'Supreme Clothing', price: 75.99, category_id: categories[3].id, user_id: users[4].id, style: 1, shipping: 2, location: 2, cost: 2},
  {rating: 5, description: 'Supreme', title: 'Supreme Clothing', price: 75.99, category_id: categories[3].id, user_id: users[5].id, style: 1, shipping: 0, location: 2, cost: 3, sale: 1},
  {rating: 5, description: 'Gucci', title: 'Gucci', price: 135.99, category_id: categories[3].id, user_id: users[6].id, style: 2, shipping: 1, location: 1, cost: 4},
  {rating: 5, description: 'Supreme3', title: 'Supreme Clothing', price: 15.00, category_id: categories[3].id, user_id: users[7].id, style: 1, shipping: 0, location: 2, cost: 1, sale: 1},
  {rating: 5, description: 'Polo', title: 'Polo Shirt', price: 35.99, category_id: categories[3].id, user_id: users[8].id, style: 2, shipping: 0, location: 1, cost: 1},
  {rating: 5, description: 'Dress', title: 'Dress', price: 29.99, category_id: categories[3].id, user_id: users[0].id, style: 1, shipping: 2, location: 1, cost: 2, sale: 1},
  {rating: 5, description: 'Chanel', title: 'Chanel', price: 23.00, category_id: categories[3].id, user_id: users[1].id, style: 2, shipping: 0, location: 2, cost: 3},
  {rating: 5, description: 'Belt', title: 'Belt', price: 100.00, category_id: categories[3].id, user_id: users[2].id, style: 1, shipping: 1, location: 1, cost: 4, sale: 1},
  {rating: 5, description: 'Pea Coat', title: 'Pea Coat', price: 150.00, category_id: categories[3].id, user_id: users[3].id, style: 2, shipping: 1, location: 2, cost: 1},
  {rating: 5, description: 'Pea Coat2', title: 'Pea Coat', price: 35.99, category_id: categories[3].id, user_id: users[4].id, style: 1, shipping: 2, location: 2, cost: 2},
  {rating: 5, description: 'Custom made nike show', title: 'Shoe', price: 90.00, category_id: categories[3].id, user_id: users[5].id, style: 2, shipping: 2, location: 1, cost: 3, sale: 1},
  {rating: 5, description: 'Art 1', title: 'Art', price: 20.00, category_id: categories[1].id, user_id: users[6].id, style: 1, shipping: 1, location: 1, cost: 4},
  {rating: 5, description: 'Art 2', title: 'Art', price: 35.99, category_id: categories[1].id, user_id: users[7].id, style: 2, shipping: 0, location: 1, cost: 1, sale: 1},
  {rating: 5, description: 'Art 3', title: 'Art', price: 33.00, category_id: categories[1].id, user_id: users[8].id, style: 1, shipping: 1, location: 1, cost: 2, sale: 1},
  {rating: 5, description: 'Art 4', title: 'Art', price: 12.00, category_id: categories[1].id, user_id: users[1].id, style: 2, shipping: 1, location: 2, cost: 3},
  {rating: 5, description: 'Art 5', title: 'Art', price: 5.00, category_id: categories[1].id, user_id: users[0].id, style: 1, shipping: 0, location: 2, cost: 4},
  {rating: 5, description: 'Art 6', title: 'Art', price: 65.00, category_id: categories[1].id, user_id: users[2].id, style: 2, shipping: 0, location: 1, cost: 1, sale: 1},
  {rating: 5, description: 'Art 7', title: 'Art', price: 79.99, category_id: categories[1].id, user_id: users[3].id, style: 1, shipping: 2, location: 1, cost: 2},
  {rating: 5, description: 'Art 8', title: 'Art', price: 50.00, category_id: categories[1].id, user_id: users[4].id, style: 2, shipping: 0, location: 1, cost: 3, sale: 1},
  {rating: 5, description: 'Art 9', title: 'Art', price: 22.25, category_id: categories[1].id, user_id: users[5].id, style: 1, shipping: 2, location: 2, cost: 4},
  {rating: 5, description: 'Art 10', title: 'Art', price: 150.50, category_id: categories[1].id, user_id: users[6].id, style: 2, shipping: 0, location: 2, cost: 1, sale: 1},
  {rating: 5, description: 'Art 11', title: 'Art', price: 300.00, category_id: categories[1].id, user_id: users[7].id, style: 2, shipping: 1, location: 1, cost: 2},
  {rating: 5, description: 'Art 12', title: 'Art', price: 12.00, category_id: categories[1].id, user_id: users[8].id, style: 2, shipping: 0, location: 2, cost: 3, sale: 1},
  {rating: 5, description: 'Electronics', title: 'Electronics', price: 57.00, category_id: categories[7].id, user_id: users[0].id, style: 1, shipping: 1, location: 1, cost: 4, sale: 1},
  {rating: 5, description: 'Electronics2', title: 'Electronics', price: 20.00, category_id: categories[7].id, user_id: users[1].id, style: 1, shipping: 1, location: 1, cost: 1},
  {rating: 5, description: 'Electronics3', title: 'Electronics', price: 59.99, category_id: categories[7].id, user_id: users[2].id, style: 1, shipping: 0, location: 1, cost: 2, sale: 1},
  {rating: 5, description: 'Electronics4', title: 'Electronics', price: 85.00, category_id: categories[7].id, user_id: users[3].id, style: 2, shipping: 0, location: 1, cost: 3},
  {rating: 5, description: 'Electronics5', title: 'Electronics', price: 75.70, category_id: categories[7].id, user_id: users[4].id, style: 2, shipping: 2, location: 2, cost: 4, sale: 1},
  {rating: 5, description: 'Electronics6', title: 'Electronics', price: 315.50, category_id: categories[7].id, user_id: users[5].id, style: 1, shipping: 0, location: 2, cost: 1},
  {rating: 5, description: 'Electronics7', title: 'Electronics', price: 299.00, category_id: categories[7].id, user_id: users[6].id, style: 1, shipping: 2, location: 2, cost: 2, sale: 1},
  {rating: 5, description: 'Electronics8', title: 'Electronics', price: 214.00, category_id: categories[7].id, user_id: users[7].id, style: 2, shipping: 0, location: 2, cost: 3},
  {rating: 5, description: 'Electronics9', title: 'Electronics', price: 77.00, category_id: categories[7].id, user_id: users[8].id, style: 1, shipping: 2, location: 2, cost: 4},
  {rating: 5, description: 'Electronics10', title: 'Electronics', price: 22.25, category_id: categories[7].id, user_id: users[0].id, style: 2, shipping: 1, location: 1, cost: 1, sale: 1},
  {rating: 5, description: 'Electronics11', title: 'Electronics', price: 18.75, category_id: categories[7].id, user_id: users[1].id, style: 1, shipping: 0, location: 1, cost: 2, sale: 1},
  {rating: 5, description: 'Electronics12', title: 'Electronics', price: 91.90, category_id: categories[7].id, user_id: users[2].id, style: 2, shipping: 2, location: 2, cost: 3, sale: 1},
  {rating: 5, description: 'Sports1', title: 'Sports', price: 69.99, category_id: categories[2].id, user_id: users[3].id, style: 1, shipping: 1, location: 2, cost: 4},
  {rating: 5, description: 'Sports2', title: 'Sports', price: 35.99, category_id: categories[2].id, user_id: users[4].id, style: 1, shipping: 0, location: 2, cost: 1, sale: 1},
  {rating: 5, description: 'Sports3', title: 'Sports', price: 39.99, category_id: categories[2].id, user_id: users[5].id, style: 1, shipping: 1, location: 2, cost: 2, sale: 1},
  {rating: 5, description: 'Sports4', title: 'Sports', price: 75.00, category_id: categories[2].id, user_id: users[6].id, style: 1, shipping: 0, location: 1, cost: 3},
  {rating: 5, description: 'Sports5', title: 'Sports', price: 9.75, category_id: categories[2].id, user_id: users[7].id, style: 1, shipping: 2, location: 1, cost: 4, sale: 1},
  {rating: 5, description: 'Sports6', title: 'Sports', price: 15.50, category_id: categories[2].id, user_id: users[8].id, style: 2, shipping: 0, location: 2, cost: 1},
  {rating: 5, description: 'Sports7', title: 'Sports', price: 20.00, category_id: categories[2].id, user_id: users[0].id, style: 2, shipping: 1, location: 2, cost: 2, sale: 1},
  {rating: 5, description: 'Sports8', title: 'Sports', price: 69.10, category_id: categories[2].id, user_id: users[1].id, style: 2, shipping: 0, location: 1, cost: 3},
  {rating: 5, description: 'Sports9', title: 'Sports', price: 35.99, category_id: categories[2].id, user_id: users[2].id, style: 2, shipping: 1, location: 1, cost: 4, sale: 1},
  {rating: 5, description: 'Sports10', title: 'Sports', price: 16.75, category_id: categories[2].id, user_id: users[3].id, style: 1, shipping: 0, location: 1, cost: 1, sale: 1},
  {rating: 5, description: 'Sports12', title: 'Sports', price: 20.00, category_id: categories[2].id, user_id: users[4].id, style: 2, shipping: 2, location: 2, cost: 2},
  {rating: 5, description: 'Sports11', title: 'Sports', price: 102.74, category_id: categories[2].id, user_id: users[5].id, style: 1, shipping: 0, location: 1, cost: 4, sale: 1},
  {rating: 5, description: 'Garden', title: 'Garden', price: 22.74, category_id: categories[5].id, user_id: users[6].id, style: 1, shipping: 0, location: 1, cost: 1, sale: 1},
  {rating: 5, description: 'Garden2', title: 'Garden2', price: 212.74, category_id: categories[5].id, user_id: users[7].id, style: 1, shipping: 1, location: 2, cost: 4, sale: 0},
  {rating: 5, description: 'Garden3', title: 'Garden3', price: 49.00, category_id: categories[5].id, user_id: users[8].id, style: 1, shipping: 1, location: 1, cost: 2, sale: 1},
  {rating: 5, description: 'Garden4', title: 'Garden4', price: 12.45, category_id: categories[5].id, user_id: users[0].id, style: 1, shipping: 1, location: 2, cost: 0, sale: 0},
  {rating: 5, description: 'Garden5', title: 'Garden5', price: 8.75, category_id: categories[5].id, user_id: users[1].id, style: 2, shipping: 0, location: 1, cost:0, sale: 0},
  {rating: 5, description: 'Garden6', title: 'Garden6', price: 100.25, category_id: categories[5].id, user_id: users[2].id, style: 1, shipping: 2, location: 2, cost: 4, sale: 1},
  {rating: 5, description: 'Garden7', title: 'Garden7', price: 100.00, category_id: categories[5].id, user_id: users[3].id, style: 2, shipping: 1, location: 1, cost: 3, sale: 0},
  {rating: 5, description: 'Garden8', title: 'Garden8', price: 75.99, category_id: categories[5].id, user_id: users[4].id, style: 2, shipping: 0, location: 2, cost: 3, sale: 1},
  {rating: 5, description: 'Garden9', title: 'Garden9', price: 24.99, category_id: categories[5].id, user_id: users[4].id, style: 2, shipping: 0, location: 2, cost: 1, sale: 1},
  {rating: 5, description: 'Garden10', title: 'Garden10', price: 15.99, category_id: categories[5].id, user_id: users[4].id, style: 2, shipping: 0, location: 2, cost: 1, sale: 1},
  {rating: 5, description: 'Garden11', title: 'Garden11', price: 5.99, category_id: categories[5].id, user_id: users[4].id, style: 2, shipping: 0, location: 2, cost: 0, sale: 1},
  {rating: 5, description: 'Garden12', title: 'Garden12', price: 30.99, category_id: categories[5].id, user_id: users[5].id, style: 2, shipping: 0, location: 2, cost: 2, sale: 1},
  {rating: 5, description: 'Kitchen1', title: 'Kitchen1', price: 10.99, category_id: categories[6].id, user_id: users[6].id, style: 2, shipping: 0, location: 1, cost: 1, sale: 1},
  {rating: 5, description: 'Kitchen2', title: 'Kitchen2', price: 49.99, category_id: categories[6].id, user_id: users[7].id, style: 2, shipping: 1, location: 1, cost: 2, sale: 1},
  {rating: 5, description: 'Kitchen3', title: 'Kitchen3', price: 99.99, category_id: categories[6].id, user_id: users[8].id, style: 2, shipping: 2, location: 2, cost: 3, sale: 1},
  {rating: 5, description: 'Kitchen4', title: 'Kitchen4', price: 30.99, category_id: categories[6].id, user_id: users[0].id, style: 2, shipping: 0, location: 2, cost: 2, sale: 1},
  {rating: 5, description: 'Kitchen5', title: 'Kitchen5', price: 19.99, category_id: categories[6].id, user_id: users[1].id, style: 2, shipping: 1, location: 1, cost: 1, sale: 1},
  {rating: 5, description: 'Kitchen6', title: 'Kitchen6', price: 104.99, category_id: categories[6].id, user_id: users[2].id, style: 2, shipping: 1, location: 1, cost: 4, sale: 1},
  {rating: 5, description: 'Kitchen7', title: 'Kitchen7', price: 44.99, category_id: categories[6].id, user_id: users[3].id, style: 1, shipping: 1, location: 2, cost: 2, sale: 0},
  {rating: 5, description: 'Kitchen8', title: 'Kitchen8', price: 49.99, category_id: categories[6].id, user_id: users[4].id, style: 1, shipping: 0, location: 2, cost: 2, sale: 0},
  {rating: 5, description: 'Kitchen9', title: 'Kitchen9', price: 149.99, category_id: categories[6].id, user_id: users[5].id, style: 2, shipping: 2, location: 1, cost: 4, sale: 1},
  {rating: 5, description: 'Kitchen10', title: 'Kitchen10', price: 149.99, category_id: categories[6].id, user_id: users[6].id, style: 1, shipping: 1, location: 1, cost: 4, sale: 0},
  {rating: 5, description: 'Kitchen11', title: 'Kitchen10', price: 199.99, category_id: categories[6].id, user_id: users[7].id, style: 2, shipping: 2, location: 0, cost: 4, sale: 1},
  {rating: 5, description: 'Kitchen12', title: 'Kitchen12', price: 109.99, category_id: categories[6].id, user_id: users[8].id, style: 2, shipping: 1, location: 1, cost: 4, sale: 0},
  {rating: 5, description: 'Children1', title: 'Children1', price: 9.99, category_id: categories[0].id, user_id: users[0].id, style: 2, shipping: 1, location: 1, cost: 1, sale: 0},
  {rating: 5, description: 'Children2', title: 'Children2', price: 29.99, category_id: categories[0].id, user_id: users[2].id, style: 1, shipping: 0, location: 2, cost: 2, sale: 1},
  {rating: 5, description: 'Children3', title: 'Children3', price: 54.99, category_id: categories[0].id, user_id: users[3].id, style: 2, shipping: 1, location: 2, cost: 3, sale: 0},
  {rating: 5, description: 'Children4', title: 'Children4', price: 109.99, category_id: categories[0].id, user_id: users[4].id, style: 1, shipping: 0, location: 1, cost: 4, sale: 1},
  {rating: 5, description: 'Children5', title: 'Children5', price: 49.99, category_id: categories[0].id, user_id: users[5].id, style: 2, shipping: 0, location: 1, cost: 2, sale: 1},
  {rating: 5, description: 'Children6', title: 'Children6', price: 149.99, category_id: categories[0].id, user_id: users[1].id, style: 1, shipping: 2, location: 1, cost: 4, sale: 0},
  {rating: 5, description: 'Children7', title: 'Children7', price: 74.99, category_id: categories[0].id, user_id: users[6].id, style: 2, shipping: 1, location: 2, cost: 3, sale: 1},
  {rating: 5, description: 'Children8', title: 'Children8', price: 3.99, category_id: categories[0].id, user_id: users[7].id, style: 1, shipping: 2, location: 2, cost: 1, sale: 0},
  {rating: 5, description: 'Children9', title: 'Children9', price: 39.99, category_id: categories[0].id, user_id: users[8].id, style: 1, shipping: 0, location: 2, cost: 1, sale: 1},
  {rating: 5, description: 'Children10', title: 'Children10', price: 49.99, category_id: categories[0].id, user_id: users[5].id, style: 1, shipping: 1, location: 2, cost: 2, sale: 0},
  {rating: 5, description: 'Children11', title: 'Children11', price: 99.99, category_id: categories[0].id, user_id: users[5].id, style: 2, shipping: 2, location: 1, cost: 3, sale: 1},
  {rating: 5, description: 'Children12', title: 'Children12', price: 24.99, category_id: categories[0].id, user_id: users[5].id, style: 1, shipping: 0, location: 1, cost: 1, sale: 0}
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
prod60 = sort_products[60]
prod61 = sort_products[61]
prod62 = sort_products[62]
prod63 = sort_products[63]
prod64 = sort_products[64]
prod65 = sort_products[65]
prod66 = sort_products[66]
prod67 = sort_products[67]
prod68 = sort_products[68]
prod69 = sort_products[69]
prod70 = sort_products[70]
prod71 = sort_products[71]
prod72 = sort_products[72]
prod73 = sort_products[73]
prod74 = sort_products[74]
prod75 = sort_products[75]
prod76 = sort_products[76]
prod77 = sort_products[77]
prod78 = sort_products[78]
prod79 = sort_products[79]
prod80 = sort_products[80]
prod81 = sort_products[81]
prod82 = sort_products[82]
prod83 = sort_products[83]
prod84 = sort_products[84]
prod85 = sort_products[85]
prod86 = sort_products[86]
prod87 = sort_products[87]
prod88 = sort_products[88]
prod89 = sort_products[89]
prod90 = sort_products[90]
prod91 = sort_products[91]
prod92 = sort_products[92]
prod93 = sort_products[93]
prod94 = sort_products[94]
prod95 = sort_products[95]

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
add_photo(Product, prod60.id, "https://s3.amazonaws.com/kings-2-dev/garden1.png", "garden1.png")
add_photo(Product, prod61.id, "https://s3.amazonaws.com/kings-2-dev/garden2.png", "garden2.png")
add_photo(Product, prod62.id, "https://s3.amazonaws.com/kings-2-dev/garden3.png", "garden3.png")
add_photo(Product, prod63.id, "https://s3.amazonaws.com/kings-2-dev/garden4.png", "garden4.png")
add_photo(Product, prod64.id, "https://s3.amazonaws.com/kings-2-dev/garden5.png", "garden5.png")
add_photo(Product, prod65.id, "https://s3.amazonaws.com/kings-2-dev/garden6.png", "garden6.png")
add_photo(Product, prod66.id, "https://s3.amazonaws.com/kings-2-dev/garden7.png", "garden7.png")
add_photo(Product, prod67.id, "https://s3.amazonaws.com/kings-2-dev/garden8.png", "garden8.png")
add_photo(Product, prod68.id, "https://s3.amazonaws.com/kings-2-dev/garden9.png", "garden9.png")
add_photo(Product, prod69.id, "https://s3.amazonaws.com/kings-2-dev/garden10.png", "garden10.png")
add_photo(Product, prod70.id, "https://s3.amazonaws.com/kings-2-dev/garden11.png", "garden11.png")
add_photo(Product, prod71.id, "https://s3.amazonaws.com/kings-2-dev/garden12.png", "garden12.png")
add_photo(Product, prod72.id, "https://s3.amazonaws.com/kings-2-dev/kitchen1.png", "kitchen1.png")
add_photo(Product, prod73.id, "https://s3.amazonaws.com/kings-2-dev/kitchen2.png", "kitchen2.png")
add_photo(Product, prod74.id, "https://s3.amazonaws.com/kings-2-dev/kitchen3.png", "kitchen3.png")
add_photo(Product, prod75.id, "https://s3.amazonaws.com/kings-2-dev/kitchen4.png", "kitchen4.png")
add_photo(Product, prod76.id, "https://s3.amazonaws.com/kings-2-dev/kitchen5.png", "kitchen5.png")
add_photo(Product, prod77.id, "https://s3.amazonaws.com/kings-2-dev/kitchen6.png", "kitchen6.png")
add_photo(Product, prod78.id, "https://s3.amazonaws.com/kings-2-dev/kitchen7.png", "kitchen7.png")
add_photo(Product, prod79.id, "https://s3.amazonaws.com/kings-2-dev/kitchen8.png", "kitchen8.png")
add_photo(Product, prod80.id, "https://s3.amazonaws.com/kings-2-dev/kitchen9.png", "kitchen9.png")
add_photo(Product, prod81.id, "https://s3.amazonaws.com/kings-2-dev/kitchen10.png", "kitchen10.png")
add_photo(Product, prod82.id, "https://s3.amazonaws.com/kings-2-dev/kitchen11.png", "kitchen11.png")
add_photo(Product, prod83.id, "https://s3.amazonaws.com/kings-2-dev/kitchen12.png", "kitchen12.png")
add_photo(Product, prod84.id, "https://s3.amazonaws.com/kings-2-dev/children1.png", "children1.png")
add_photo(Product, prod85.id, "https://s3.amazonaws.com/kings-2-dev/children2.png", "children2.png")
add_photo(Product, prod86.id, "https://s3.amazonaws.com/kings-2-dev/children3.png", "children3.png")
add_photo(Product, prod87.id, "https://s3.amazonaws.com/kings-2-dev/children4.png", "children4.png")
add_photo(Product, prod88.id, "https://s3.amazonaws.com/kings-2-dev/children5.png", "children5.png")
add_photo(Product, prod89.id, "https://s3.amazonaws.com/kings-2-dev/children6.png", "children6.png")
add_photo(Product, prod90.id, "https://s3.amazonaws.com/kings-2-dev/children7.png", "children7.png")
add_photo(Product, prod91.id, "https://s3.amazonaws.com/kings-2-dev/children8.png", "children8.png")
add_photo(Product, prod92.id, "https://s3.amazonaws.com/kings-2-dev/children9.png", "children9.png")
add_photo(Product, prod93.id, "https://s3.amazonaws.com/kings-2-dev/children10.png", "children10.png")
add_photo(Product, prod94.id, "https://s3.amazonaws.com/kings-2-dev/children11.png", "children11.png")
add_photo(Product, prod95.id, "https://s3.amazonaws.com/kings-2-dev/children12.png", "children12.png")
