import React from "react";
import { connect } from "react-redux";
import ReviewForm from "./review_form";
import { Link } from "react-router-dom";
import { createReview } from "../../actions/review_actions";

const mapDispatchToProps = dispatch => {
  return {
    createReview: review => dispatch(createReview(review))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ReviewForm);
