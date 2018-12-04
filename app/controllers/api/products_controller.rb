class Api::ProductsController < ApplicationController

  def index
    @products = Product.where(category_id: params[:category_id])
  end

  private
  def product_params
    params.require(:product).permit(:title, :price, :description, :category_id, :user_id)
  end
end
