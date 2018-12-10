import React from "react";
import { connect } from "react-redux";
import CategoryShow from "./category_show";
import { Link } from "react-router-dom";
import { fetchSingleCategory } from "../../../actions/category_actions";

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
    products: products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSingleCategory: category => dispatch(fetchSingleCategory(category))
  };
};

export default connect(
  msp,
  mapDispatchToProps
)(CategoryShow);
