import {
  RECEIVE_DROPDOWN_BUSINESSES,
  CLEAR_DROPDOWN_LIST
} from "../actions/search_actions";
import { merge } from "lodash";

export default (state = {}, action) => {
  let newState;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_DROPDOWN_BUSINESSES:
      if (action.payload.products) return action.payload.products;
      return {};
    case CLEAR_DROPDOWN_LIST:
      return {};
    default:
      return state;
  }
};
