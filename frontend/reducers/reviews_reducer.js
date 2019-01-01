import { RECEIVE_REVIEW, RECEIVE_ALL_REVIEWS } from "../actions/review_actions";
import { merge } from "lodash";

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_REVIEW:
      return merge({}, state, {
        [action.review.id]: action.review
      });
    case RECEIVE_ALL_REVIEWS:
      return action.reviews;
    default:
      return state;
  }
};
