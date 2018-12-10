import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import modalReducer from "./modal_reducer";
import categoriesReducer from "./categories_reducer";
import productsReducer from "./products_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  modal: modalReducer,
  categories: categoriesReducer,
  products: productsReducer
});

export default entitiesReducer;
