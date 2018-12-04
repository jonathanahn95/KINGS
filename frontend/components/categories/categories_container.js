import React from "react";
import { connect } from "react-redux";
import Categories from "./categories";
import { Link } from "react-router-dom";
import { openModal } from "../../actions/modal_actions";
import { fetchAllCategories } from "../../actions/category_actions";

const msp = ({ entities: { categories } }) => {
  return {
    categories: Object.values(categories)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllCategories: () => dispatch(fetchAllCategories())
  };
};

export default connect(
  msp,
  mapDispatchToProps
)(Categories);
