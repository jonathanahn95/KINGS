import React from "react";
import { connect } from "react-redux";
import ProductsIndex from "./products_index";
import { Link } from "react-router-dom";
import { fetchAllProducts } from "../../../actions/product_actions";

const msp = state => {
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
    fetchAllProducts: () => dispatch(fetchAllProducts())
  };
};

export default connect(
  msp,
  mapDispatchToProps
)(ProductsIndex);
