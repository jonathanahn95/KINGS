class Changecolnameonproducts < ActiveRecord::Migration[5.2]
  def change
    remove_column :products, :type
    add_column :products, :style, :string
  end
end
