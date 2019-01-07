import React from "react";
import { connect } from "react-redux";
import UserProducts from "./user_products";
import { Link } from "react-router-dom";
import { fetchUser } from "../../../actions/user_actions";

const msp = (state, ownProps) => {
  return {
    userProducts: state.entities.products,
    userProductPhotos: state.entities.photos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: user => dispatch(fetchUser(user))
  };
};

export default connect(
  msp,
  mapDispatchToProps
)(UserProducts);
