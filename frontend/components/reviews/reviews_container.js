import React from "react";
import { connect } from "react-redux";
import Reviews from "./reviews";
import { Link } from "react-router-dom";
import {
  createReview,
  deleteReview,
  receiveProductReviews
} from "../../actions/review_actions";

const msp = (state, ownProps) => {
  return {
    reviews: Object.values(state.entities.reviews),
    users: state.entities.users,
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createReview: review => dispatch(createReview(review)),
    deleteReview: id => dispatch(deleteReview(id)),
    receiveProductReviews: productId =>
      dispatch(receiveProductReviews(productId))
  };
};

export default connect(
  msp,
  mapDispatchToProps
)(Reviews);
