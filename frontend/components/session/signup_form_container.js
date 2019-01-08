import React from "react";
import { connect } from "react-redux";
import { signup, clearErrors, login } from "../../actions/session_actions";
import SessionForm from "./session_form";
import errorsReducer from "../../reducers/errors_reducer";
import { Link } from "react-router-dom";
import { closeModal } from "../../actions/modal_actions";

const msp = (state, ownProps) => {
  return {
    errors: state.errors.session,
    formType: "Signup",
    link: <Link to="/signup">Login</Link>,
    greeting: "Create your account",
    value: "Register"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors()),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(
  msp,
  mapDispatchToProps
)(SessionForm);
