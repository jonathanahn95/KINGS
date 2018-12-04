class Api::CategoriesController < ApplicationController


  def index
    @categories = Category.all
  end

  private
  def business_category_params
    params.require(:category).permit(:category_name)
  end
end
