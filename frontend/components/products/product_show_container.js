import React from "react";
import { connect } from "react-redux";
import ProductShow from "./product_show";
import { Link } from "react-router-dom";
import { fetchProduct } from "../../actions/product_actions";
import { fetchAllUsers, fetchUser } from "../../actions/user_actions";

const msp = (state, ownProps) => {
  return {
    product: state.entities.products[ownProps.match.params.id],
    user: state.entities.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProduct: product => dispatch(fetchProduct(product)),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchUser: user => dispatch(fetchUser(user))
  };
};

export default connect(
  msp,
  mapDispatchToProps
)(ProductShow);
