class Createcartitems < ActiveRecord::Migration[5.2]
  def change
    create_table :cart_items do |t|
     t.integer :product_id, null: false
     t.integer :user_id, null: false
     t.integer :quantity, null: false

     t.timestamps
     end
     add_index :cart_items, [:user_id, :product_id], unique: true
  end
end
