import React from "react";
import { withRouter } from "react-router-dom";
import merge from "lodash/merge";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";

class UserProducts extends React.Component {
  render() {
    return <div>{this.props.product.id}</div>;
  }
}

export default withRouter(UserProducts);
