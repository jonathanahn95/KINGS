import React from "react";
import { connect } from "react-redux";
import CategoryShow from "./category_show";
import { Link } from "react-router-dom";
import { fetchSingleCategory } from "../../actions/category_actions";

const msp = (state, ownProps) => {
  return {
    category: state.entities.categories[ownProps.match.params.id]
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
