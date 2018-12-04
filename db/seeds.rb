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
  {description: 'This is the best gift I ever got', title: 'Necklace', price: 35.99, category_id: categories[0].id}
  ])
