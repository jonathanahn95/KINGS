import {
  CLEAR_ERRORS,
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER
} from "../actions/session_actions";

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return [];
    case CLEAR_ERRORS:
      return [];
    case RECEIVE_SESSION_ERRORS:
      if (!action.errors) {
        return null;
      }
      return action.errors;
    default:
      return state;
  }
};
