class Api::ProductsController < ApplicationController

  def index
    if params[:category_id]
      @products = Product.with_attached_photos.includes(:category, :user).where(category_id: params[:category_id])
    else
      @products = Product.with_attached_photos.includes(:category, :user).all
    end
  end

  def show
    @product = Product.with_attached_photos.includes(:category, :user).find(params[:id])
  end

  private
  def product_params
    params.require(:product).permit(:title, :price, :description, :category_id, :user_id)
  end
end
