import React from "react";
import { connect } from "react-redux";
import { login, clearErrors, logout } from "../../actions/session_actions";
import GreetingLinks from "./greeting_links.jsx";
import { Link } from "react-router-dom";
import { closeModal, openModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    modal: state.entities.modal,
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(login(user)),
    openModal: type => dispatch(openModal(type)),
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GreetingLinks);
