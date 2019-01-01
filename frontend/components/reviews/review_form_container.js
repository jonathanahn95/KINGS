import React from "react";
import { connect } from "react-redux";
import ReviewForm from "./review_form";
import { Link } from "react-router-dom";
import { createReview } from "../../actions/review_actions";
import { openModal } from "../../actions/modal_actions";

const msp = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createReview: review => dispatch(createReview(review)),
    openModal: type => dispatch(openModal(type))
  };
};

export default connect(
  msp,
  mapDispatchToProps
)(ReviewForm);
