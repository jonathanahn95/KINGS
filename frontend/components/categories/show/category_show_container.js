import React from "react";
import { connect } from "react-redux";
import CategoryShow from "./category_show";
import { Link } from "react-router-dom";
import { fetchSingleCategory } from "../../../actions/category_actions";
import { fetchUser, fetchAllUsers } from "../../../actions/user_actions";

const msp = (state, ownProps) => {
  let categoryName,
    photos,
    products,
    categoryId = null;
  let category = state.entities.categories[ownProps.match.params.id];
  if (category) {
    categoryName = category.category_name;
    photos = category.photos;
    products = category.products;
    categoryId = category.id;
  }
  return {
    category: category,
    categoryId: categoryId,
    categoryName: categoryName,
    photos: photos,
    products: products,
    users: state.entities.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSingleCategory: category => dispatch(fetchSingleCategory(category)),
    fetchUser: user => dispatch(fetchUser(user)),
    fetchAllUsers: () => dispatch(fetchAllUsers())
  };
};

export default connect(
  msp,
  mapDispatchToProps
)(CategoryShow);
