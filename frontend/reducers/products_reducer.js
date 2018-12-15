import merge from "lodash/merge";
import {
  RECEIVE_ALL_PRODUCTS,
  RECEIVE_PRODUCT
} from "../actions/product_actions";
import { RECEIVE_SINGLE_CATEGORY } from "../actions/category_actions";

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SINGLE_CATEGORY:
      if (action.payload.products) {
        return action.payload.products[action.payload.category.id];
      }
      return {};
    case RECEIVE_ALL_PRODUCTS:
      return action.payload.products;
    case RECEIVE_PRODUCT:
      return { [action.payload.product.id]: action.payload.product };
    default:
      return state;
  }
};
