import React from "react";
import { connect } from "react-redux";
import ItemForm from "./item_form";
import { withRouter } from "react-router-dom";
import { createProduct } from "../../actions/product_actions";
import { fetchAllCategories } from "../../actions/category_actions";

const mapStateToProps = (state, ownProps) => {
  const defaultItem = {
    id: "",
    title: "",
    description: "",
    price: "",
    imageUrl: null,
    userId: "",
    uploadedFile: null,
    category_id: ""
  };
  return {
    categories: state.entities.categories,
    item: defaultItem,
    formTitle: "Create a New Product!",
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processItemForm: item => dispatch(createProduct(item)),
    fetchAllCategories: () => dispatch(fetchAllCategories())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ItemForm)
);
