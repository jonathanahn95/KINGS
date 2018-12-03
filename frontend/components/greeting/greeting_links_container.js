import React from "react";
import { connect } from "react-redux";
import { login, clearErrors } from "../../actions/session_actions";
import GreetingLinks from "./greeting_links.jsx";
import { Link } from "react-router-dom";
import { closeModal } from "../../actions/modal_actions";

const msp = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(login(user))
  };
};

export default connect(
  msp,
  mapDispatchToProps
)(GreetingLinks);
