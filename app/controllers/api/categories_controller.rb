class Api::CategoriesController < ApplicationController
  def show
    @category = Category.includes(:products).find(params[:id])
    @category_products = @category.products.with_attached_photos.includes(:category, :user)
  end
  def index
    @categories = Category.all
  end

  private
  def category_params
    params.require(:category).permit(:category_name)
  end
end
