import merge from "lodash/merge";
import {
  RECEIVE_ALL_CATEGORIES,
  RECEIVE_SINGLE_CATEGORY
} from "../actions/category_actions";

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_CATEGORIES:
      return merge({}, action.categories);
    case RECEIVE_SINGLE_CATEGORY:
      return merge({}, state, {
        [action.payload.category.id]: action.payload.category
      });
    default:
      return state;
  }
};
