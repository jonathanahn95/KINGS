import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_ALL_PRODUCTS } from "../actions/product_actions";
import { RECEIVE_SINGLE_CATEGORY } from "../actions/category_actions";
import { RECEIVE_USER_INFO } from "../actions/user_actions";
import { RECEIVE_SEARCH_RESULTS } from "../actions/search_actions";

import { merge } from "lodash";

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.user.id]: action.user });
    case RECEIVE_ALL_PRODUCTS:
      return merge({}, action.payload.users);
    case RECEIVE_SINGLE_CATEGORY:
      if (action.payload.users) {
        return action.payload.users[action.payload.category.id];
      }
      return {};
    case RECEIVE_USER_INFO:
      return merge({}, state, {
        [action.payload.id]: action.payload.user
      });
    case RECEIVE_SEARCH_RESULTS:
      if (action.payload.users) {
        return action.payload.users;
      } else {
        return {};
      }
    default:
      return state;
  }
};
