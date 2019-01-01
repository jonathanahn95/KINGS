import React from "react";
import { connect } from "react-redux";
import SearchForm from "./search_form";
import { Link } from "react-router-dom";

const msp = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  msp,
  mapDispatchToProps
)(SearchForm);
