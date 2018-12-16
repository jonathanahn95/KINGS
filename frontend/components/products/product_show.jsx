import React from "react";
import { withRouter } from "react-router-dom";
import merge from "lodash/merge";
import { Link } from "react-router-dom";
import ProductShowInfoContainer from "./product_show_info_container";
import ReactStars from "react-stars";

class ProductShow extends React.Component {
  render() {
    return (
      <div>
        <ProductShowInfoContainer />
      </div>
    );
  }
}

export default withRouter(ProductShow);
