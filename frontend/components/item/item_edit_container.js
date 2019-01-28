import React from "react";
import { connect } from "react-redux";
import ItemForm from "./item_form";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
  const defaultItem = {
    id: "",
    title: "",
    description: "",
    price: "",
    imageUrl: null,
    userId: "",
    uploadedFile: null
  };
  const fetchedItem = state.entities.products[ownProps.match.params.id];
  let item = fetchedItem || defaultItem;
  return {
    item: defaultItem,
    formTitle: "Update Your Product",
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllCategories: () => dispatch(fetchAllCategories())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemForm);
