import merge from "lodash/merge";
import {
  RECEIVE_ALL_PRODUCTS,
  RECEIVE_PRODUCT
} from "../actions/product_actions";

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_PRODUCTS:
      debugger;
      return merge({}, action.products);
    case RECEIVE_PRODUCT:
      return merge({}, state, { [action.product.id]: action.product });
    default:
      return state;
  }
};
