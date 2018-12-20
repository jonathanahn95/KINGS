import React from "react";
import { connect } from "react-redux";
import ProductShow from "./product_show";
import { Link } from "react-router-dom";
import { fetchProduct } from "../../actions/product_actions";
import { fetchUser } from "../../actions/user_actions";
import { addToCart } from "../../actions/cart_item_actions";

const msp = (state, ownProps) => {
  return {
    product: state.entities.products[ownProps.match.params.id],
    user: state.entities.users,
    photos: state.entities.photos[ownProps.match.params.id],
    userProducts: state.entities.products,
    userProductPhotos: state.entities.photos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProduct: product => dispatch(fetchProduct(product)),
    fetchUser: user => dispatch(fetchUser(user)),
    addToCart: item => dispatch(addToCart(item))
  };
};

export default connect(
  msp,
  mapDispatchToProps
)(ProductShow);
