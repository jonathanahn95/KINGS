import React from "react";
// import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Route } from "react-router-dom";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import SplashContainer from "./splash/splash_container";
import CategoryShowContainer from "./categories/show/category_show_container";
import ProductShowContainer from "./products/show/product_show_container";
import ProductIndexContainer from "./products/index/products_index_container";
import HeaderContainer from "./header/header_container";
import CartItemsContainer from "./cart/cart_items_container";
import SearchFilterContainer from "./search/filter/search_filter_container";
import SearchPageContainer from "./search/page/search_page_container";
import UserProfileContainer from "./user/user_profile_container";
import ItemEditContainer from "./item/item_edit_container.js";
import ItemCreateContainer from "./item/item_create_container.js";
import Modal from "./modals/modal";
import Footer from "./footer";

const App = () => (
  <div>
    <Modal />
    <Route exact path="/" component={SplashContainer} />
    <Route exact path="/category/:id" component={CategoryShowContainer} />
    <Route exact path="/cart" component={CartItemsContainer} />
    <Route exact path="/product/:id" component={ProductShowContainer} />
    <Route exact path="/products" component={ProductIndexContainer} />
    <Route exact path="/search" component={SearchPageContainer} />
    <Route exact path="/users/:id" component={UserProfileContainer} />
    <Route exact path="/items/new" component={ItemCreateContainer} />
    <Route exact path="/items/:id/edit" component={ItemEditContainer} />
    <Footer />
  </div>
);

export default App;
