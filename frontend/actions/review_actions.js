import * as ReviewApiUtil from "./../util/review_api_util";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";
export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS";
export const REMOVE_REVIEW = "REMOVE_REVIEW";

export const receiveReview = review => {
  return {
    type: RECEIVE_REVIEW,
    review
  };
};

export const receiveAllReviews = reviews => {
  return {
    type: RECEIVE_ALL_REVIEWS,
    reviews
  };
};

export const receiveReviewErrors = errors => {
  return {
    type: RECEIVE_REVIEW_ERRORS,
    errors
  };
};

export const removeReview = review => {
  return {
    type: REMOVE_REVIEW,
    review
  };
};

export const createReview = review => {
  return dispatch => {
    return ReviewApiUtil.createReview(review).then(
      review => {
        return dispatch(receiveReview(review));
      },
      errors => {
        return dispatch(receiveReviewErrors(errors.responseJSON));
      }
    );
  };
};

export const receiveProductReviews = productId => {
  return dispatch => {
    return ReviewApiUtil.fetchProductReviews(productId).then(reviews => {
      return dispatch(receiveAllReviews(reviews));
    });
  };
};

export const deleteReview = review => {
  return dispatch => {
    return ReviewApiUtil.deleteReview(review).then(review => {
      return dispatch(removeReview(review));
    });
  };
};
