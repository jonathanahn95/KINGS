import React from "react";
import { connect } from "react-redux";
import SearchPage from "./search_page";
import { Link } from "react-router-dom";
import {
  clearDropDownResults,
  searchBusinesses
} from "../../../actions/search_actions";

const msp = (state, ownProps) => {
  let photos,
    products = null;
  if (Object.values(state.entities.products).length > 0) {
    products = state.entities.products;
    photos = state.entities.photos;
  }

  return {
    currentUser: state.entities.users[state.session.id],
    products: products,
    photos: photos,
    users: state.entities.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearDropDownResults: () => dispatch(clearDropDownResults()),
    searchBusinesses: searchData => dispatch(searchBusinesses(searchData))
  };
};

export default connect(
  msp,
  mapDispatchToProps
)(SearchPage);
