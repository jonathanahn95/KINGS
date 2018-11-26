import React from "react";
import { connect } from "react-redux";
import { signup, clearErrors, login } from "../../actions/session_actions";
import SessionForm from "./session_form";
import errorsReducer from "../../reducers/errors_reducer";
import { Link } from "react-router-dom";

const msp = (state, ownProps) => {
  return {
    errors: state.errors.session,
    formType: "Signup",
    link: <Link to="/signup">Login</Link>
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  msp,
  mapDispatchToProps
)(SessionForm);
