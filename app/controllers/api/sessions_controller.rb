class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    @products = @user.products.with_attached_photos.includes(:category, :user).limit(8)
    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: ['Invalid credentials'] , status: 404
    end
  end


  def destroy
    @user = current_user
    if @user
      logout!
     render json: {}
   else
     render json: ['No current user'], status: 404
   end
  end


end
