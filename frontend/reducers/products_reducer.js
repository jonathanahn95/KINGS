import merge from "lodash/merge";
import {
  RECEIVE_CATEGORY_PRODUCTS,
  RECEIVE_ALL_PRODUCTS
} from "../actions/product_actions";

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_PRODUCTS:
      return merge({}, action.products);
    case RECEIVE_CATEGORY_PRODUCTS:
      return merge({}, action.products);
    default:
      return state;
  }
};
