import React from "react";
import { connect } from "react-redux";
import { login, clearErrors } from "../../actions/session_actions";
import LogInForm from "./login_form";
import { Link } from "react-router-dom";

const msp = (state, ownProps) => {
  return {
    errors: state.errors.session,
    formType: "Login",
    link: <Link to="/login">Login</Link>
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  msp,
  mapDispatchToProps
)(LogInForm);
