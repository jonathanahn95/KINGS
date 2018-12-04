import React from "react";
import { connect } from "react-redux";
import CategoryShow from "./category_show";
import { Link } from "react-router-dom";
import { fetchSingleCategory } from "../../../actions/category_actions";
import { fetchCategoryProducts } from "../../../actions/product_actions";

const msp = (state, ownProps) => {
  let categoryName = null;
  let category = state.entities.categories[ownProps.match.params.id];
  if (category) {
    categoryName = category.category_name;
  }
  return {
    category: category,
    products: Object.values(state.entities.products),
    categoryName: categoryName
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSingleCategory: category => dispatch(fetchSingleCategory(category)),
    fetchCategoryProducts: category => dispatch(fetchCategoryProducts(category))
  };
};

export default connect(
  msp,
  mapDispatchToProps
)(CategoryShow);
