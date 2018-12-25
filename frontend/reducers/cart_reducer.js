import {
  RECEIVE_ITEM,
  RECEIVE_ALL_ITEMS,
  REMOVE_ALL_ITEMS,
  REMOVE_ITEM
} from "../actions/cart_item_actions";
import { merge } from "lodash";

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_ITEMS:
      if (action.payload.photos) {
        return action.payload.photos;
      }
      return {};
    case RECEIVE_ITEM:
      const newItem = action.item;
      return merge({}, state, { [newItem.product_id]: newItem });
    case REMOVE_ITEM:
      let newState = merge({}, state);
      delete newState[action.item.product_id];
      return newState;
    case REMOVE_ALL_ITEMS:
      return {};
    default:
      return state;
  }
};
