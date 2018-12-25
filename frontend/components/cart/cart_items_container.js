import React from "react";
import { connect } from "react-redux";
import { login, clearErrors } from "../../actions/session_actions";
import CartItems from "./cart_items";
import { Link } from "react-router-dom";
import {
  fetchCartItems,
  updateItem,
  deleteItem,
  checkOut
} from "../../actions/cart_item_actions";

const mapStateToProps = ({ session, entities: { cart, photos, users } }) => {
  return {
    items: Object.values(cart),
    photos: photos,
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCartItems: () => dispatch(fetchCartItems()),
    updateItem: item => dispatch(updateItem(item)),
    deleteItem: item => dispatch(deleteItem(item)),
    checkOut: () => dispatch(checkOut())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartItems);
