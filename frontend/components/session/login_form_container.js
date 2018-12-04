import React from "react";
import { connect } from "react-redux";
import { login, clearErrors } from "../../actions/session_actions";
import SessionForm from "./session_form";
import { Link } from "react-router-dom";
import { closeModal } from "../../actions/modal_actions";

const msp = (state, ownProps) => {
  return {
    errors: state.errors.session,
    formType: "Login",
    link: <Link to="/login">Login</Link>,
    greeting: "Sign in to continue",
    value: "Sign in"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(
  msp,
  mapDispatchToProps
)(SessionForm);
