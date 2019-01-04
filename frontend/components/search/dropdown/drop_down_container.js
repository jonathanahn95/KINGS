import React from "react";
import { connect } from "react-redux";
import Dropdown from "./drop_down";
import { Link } from "react-router-dom";
import {
  requestDropDownList,
  clearDropDownResults
} from "../../../actions/search_actions";

const msp = (state, ownProps) => {
  return {
    hidden: ownProps.searching,
    dropdown: ownProps.dropdown,
    products: Object.values(state.entities.search),
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
)(Dropdown);
