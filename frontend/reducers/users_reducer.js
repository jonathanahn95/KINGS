import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import {
  RECEIVE_PRODUCT_USER,
  RECEIVE_ALL_USERS
} from "../actions/user_actions";
import { merge } from "lodash";

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PRODUCT_USER:
      return merge({}, state, { [action.user.id]: action.user });
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.user.id]: action.user });
    case RECEIVE_ALL_USERS:
      return merge({}, action.users);
    default:
      return state;
  }
};
