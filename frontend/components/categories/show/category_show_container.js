import React from "react";
import { connect } from "react-redux";
import CategoryShow from "./category_show";
import { Link } from "react-router-dom";
import { fetchSingleCategory } from "../../../actions/category_actions";
import { clearDropDownResults } from "../../../actions/search_actions";

const msp = (state, ownProps) => {
  let categoryName,
    photos,
    products,
    categoryId,
    users = null;
  let category = state.entities.categories[ownProps.match.params.id];
  if (category) {
    categoryName = category.category_name;
    categoryId = category.id;
    photos = state.entities.photos;
    products = state.entities.products;
    users = state.entities.users;
  }
  return {
    category,
    categoryId,
    categoryName,
    photos,
    products,
    users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSingleCategory: category => dispatch(fetchSingleCategory(category)),
    clearDropDownResults: () => dispatch(clearDropDownResults())
  };
};

export default connect(
  msp,
  mapDispatchToProps
)(CategoryShow);
