class Api::ReviewsController < ApplicationController

  def index
    @reviews = Review.where( product_id: params[:product_id]).order(id: :asc)[0..8]
  end

  def create
    @review = Review.new(review_params)
    @review.user_id = current_user.id

    if @review.save
      render "api/reviews/show"
    else
      render json: @review.errors.full_messages, status: 522
    end
  end

  def destroy
  end

  private
  def review_params
    params.require(:review).permit(:body, :rating, :product_id)
  end
end
