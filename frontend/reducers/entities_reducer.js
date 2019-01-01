import { combineReducers } from "redux";
import users from "./users_reducer";
import modal from "./modal_reducer";
import categories from "./categories_reducer";
import products from "./products_reducer";
import photos from "./photos_reducer";
import cart from "./cart_reducer";
import reviews from "./reviews_reducer";

const entitiesReducer = combineReducers({
  users,
  modal,
  categories,
  products,
  photos,
  cart,
  reviews
});

export default entitiesReducer;
