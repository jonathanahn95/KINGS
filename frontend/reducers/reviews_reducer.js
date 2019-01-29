import {
  RECEIVE_REVIEW,
  RECEIVE_ALL_REVIEWS,
  REMOVE_REVIEW
} from "../actions/review_actions";
import { merge } from "lodash";

export default (state = {}, action) => {
  let newState;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_REVIEW:
      return merge({}, state, {
        [action.review.id]: action.review
      });
    case RECEIVE_ALL_REVIEWS:
      if (action.payload.reviews) {
        return action.payload.reviews;
      } else {
        return {};
      }
    case REMOVE_REVIEW:
      newState = merge({}, state);
      delete newState[action.review.id];
      return newState;
    default:
      return state;
  }
};
