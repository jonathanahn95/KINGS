class Addcoltoproductstable < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :type, :string
    add_column :products, :location, :string
    add_column :products, :shipping, :string
    add_column :products, :sale, :boolean
  end
end
