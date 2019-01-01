import React from "react";
import { connect } from "react-redux";
import SearchFilter from "./search_filter";
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
)(SearchFilter);
