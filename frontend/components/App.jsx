import React from "react";
// import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Route } from "react-router-dom";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import SplashContainer from "./splash/splash_container";
import Modal from "./modals/modal";

const App = () => (
  <div>
    <Modal />
    <Route exact path="/" component={SplashContainer} />
  </div>
);

export default App;
