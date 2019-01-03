class Changecoltypeonproductstable < ActiveRecord::Migration[5.2]
  def change
    remove_column :products, :style
    remove_column :products, :location
    remove_column :products, :shipping
    remove_column :products, :sale
    add_column :products, :style, :integer
    add_column :products, :location, :integer
    add_column :products, :shipping, :integer
    add_column :products, :sale, :integer
  end
end
