import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import modalReducer from "./modal_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  modal: modalReducer
});

export default entitiesReducer;
