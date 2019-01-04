import React from "react";
import { connect } from "react-redux";
import SearchForm from "./search_form";
import { Link } from "react-router-dom";
import {
  requestDropDownList,
  clearDropDownResults
} from "../../../actions/search_actions";

const msp = (state, ownProps) => {
  return {
    url: ownProps.url,
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestDropDownList: searchData =>
      dispatch(requestDropDownList(searchData)),
    clearDropDownResults: () => dispatch(clearDropDownResults())
  };
};

export default connect(
  msp,
  mapDispatchToProps
)(SearchForm);
