import React from "react";
import { connect } from "react-redux";
import ProductShowInfo from "./product_show_info";
import { Link } from "react-router-dom";
import { fetchProduct } from "../../actions/product_actions";

const msp = (state, ownProps) => {
  debugger;
  return {
    product: state.entities.products[ownProps.match.params.id],
    user: state.entities.users,
    photos: state.entities.photos[ownProps.match.params.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProduct: product => dispatch(fetchProduct(product))
  };
};

export default connect(
  msp,
  mapDispatchToProps
)(ProductShowInfo);
