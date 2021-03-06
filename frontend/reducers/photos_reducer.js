import merge from "lodash/merge";
import {
  RECEIVE_ALL_PRODUCTS,
  RECEIVE_PRODUCT
} from "../actions/product_actions";
import { RECEIVE_SINGLE_CATEGORY } from "../actions/category_actions";
import {
  RECEIVE_USER_INFO,
  RECEIVE_USER_PROF_INFO
} from "../actions/user_actions";
import { RECEIVE_ALL_ITEMS } from "../actions/cart_item_actions";
import { RECEIVE_SEARCH_RESULTS } from "../actions/search_actions";

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SINGLE_CATEGORY:
      if (action.payload.photos) {
        return action.payload.photos[action.payload.category.id];
      }
      return {};
    case RECEIVE_ALL_PRODUCTS:
      return merge({}, action.payload.photos);
    case RECEIVE_PRODUCT:
      return { [action.payload.product.id]: action.payload.photos };
    case RECEIVE_USER_INFO:
      return merge({}, state, action.payload.photos);
    case RECEIVE_USER_PROF_INFO:
      return merge({}, state, action.payload.photos);
    case RECEIVE_ALL_ITEMS:
      if (action.payload.photos) {
        return action.payload.photos;
      }
      return {};
    case RECEIVE_SEARCH_RESULTS:
      if (action.payload.photos) {
        return action.payload.photos;
      } else {
        return {};
      }
    default:
      return state;
  }
};
