class Api::ProductsController < ApplicationController

  def index
    if params[:category_id]
      @products = Product.where(category_id: params[:category_id])
    else
      @products = Product.all
    end
  end

  def show
    @product = Product.find(params[:id])
  end

  private
  def product_params
    params.require(:product).permit(:title, :price, :description, :category_id, :user_id)
  end
end
