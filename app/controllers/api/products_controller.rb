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

  def search
    @query_matches = ""
    @param_queries = {price: params[:Price], shipping: params[:Shipping], style: params[:style], location: params[:location], sale: params[:sale]}
      selected_queries = @param_queries.select {|k,v| v.length > 2}
      selected_queries.keys.each_with_index do |query,idx|
        if idx != selected_queries.length - 1
          @query_matches << "#{query} IN #{selected_queries[query]} AND "
        else
          @query_matches << "#{query} IN #{selected_queries[query]} "
        end
      end
      @query_matches.length == 0 ?
      @query_matches = "category_id IN #{params[:category_id]}" :
      @query_matches = "category_id IN #{params[:category_id]}" + "AND #{@query_matches}"

    # @query_matches = "category_id IN #{params[:category_id]}" + "AND #{@query_matches}"
    @products = Product.where(@query_matches)

    render :index
  end

  private
  def product_params
    params.require(:product).permit(:title, :price, :description, :category_id, :user_id)
  end
end
