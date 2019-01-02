import React from "react";
import { connect } from "react-redux";
import SearchFilter from "./search_filter";
import { Link } from "react-router-dom";
import { requestSearchResults } from "../../actions/search_actions";

const msp = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestSearchResults: query => dispatch(requestSearchResults(query))
  };
};

export default connect(
  msp,
  mapDispatchToProps
)(SearchFilter);
