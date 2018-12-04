class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.integer :category_id
      t.integer :user_id
      t.text :description, null:false
      t.string :title, null:false
      t.float :price, null:false
      
      t.timestamps
    end
    add_index :products, :user_id
    add_index :products, :category_id
  end
end
