import React from "react";
import { connect } from "react-redux";
import { login, clearErrors } from "../../actions/session_actions";
import GreetingLinks from "./greeting_links.jsx";
import { Link } from "react-router-dom";
import { closeModal, openModal } from "../../actions/modal_actions";

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(login(user)),
    openModal: type => dispatch(openModal(type))
  };
};

export default connect(mapDispatchToProps)(GreetingLinks);
