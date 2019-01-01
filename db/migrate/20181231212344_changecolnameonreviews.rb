class Changecolnameonreviews < ActiveRecord::Migration[5.2]
  def change
    rename_column :reviews, :business_id, :product_id

  end
end
