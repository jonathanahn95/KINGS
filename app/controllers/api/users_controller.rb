class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 404
    end
  end

  def show
    @user = User.includes(:products).find(params[:id])
    @products = @user.products.with_attached_photos.includes(:category, :user)
    render :show
  end

  private
  def user_params
    params.require(:user).permit(:password, :fname, :email)
  end
end
