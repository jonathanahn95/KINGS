import React from "react";
// import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Route } from "react-router-dom";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import SplashContainer from "./splash/splash_container";
import CategoryShowContainer from "./categories/show/category_show_container";
import HeaderContainer from "./header/header_container";
import Modal from "./modals/modal";
import Footer from "./footer";

const App = () => (
  <div>
    <HeaderContainer />

    <Modal />
    <Route exact path="/" component={SplashContainer} />
    <Route exact path="/category/:id" component={CategoryShowContainer} />
    <Footer />
  </div>
);

export default App;
