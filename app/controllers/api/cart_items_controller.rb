class Api::CartItemsController < ApplicationController

  def index
    @shopping_cart_items = CartItem.where(user_id: current_user.id)
    render 'api/cart_items/index'

  end

  def create
    @shopping_cart_item = CartItem.find_by(product_id: params[:item][:product_id], user_id: current_user.id)

    if @shopping_cart_item
      @shopping_cart_item.quantity += (params[:item][:quantity]).to_i
      @shopping_cart_item.save
      render 'api/cart_items/show'
    else
      @shopping_cart_item = CartItem.new(cart_item_params)
      @shopping_cart_item.user_id = current_user.id
      if @shopping_cart_item.save
        render 'api/cart_items/show'
      else
        render json: @shopping_cart_item.errors.full_messages, status: 422
      end
    end
  end

  def update
     @shopping_cart_item = CartItem.find(params[:id])
     if @shopping_cart_item.update(cart_item_params)
       render :show
     else
       render json: @shopping_cart_item.errors.full_messages, status: 422
     end
   end

   def destroy
      @shopping_cart_item = CartItem.find(params[:id])
      @shopping_cart_item.destroy
      render :show
    end

  private

  def cart_item_params
    params.require(:item).permit(:product_id, :quantity, :user_id, :id)
  end

end
