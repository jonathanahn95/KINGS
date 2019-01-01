export const createReview = review => {
  return $.ajax({
    method: "POST",
    url: `api/products/${review.product_id}/reviews`,
    data: { review }
  });
};

export const fetchProductReviews = productId => {
  return $.ajax({
    method: "GET",
    url: `api/products/${productId}/reviews`
  });
};
