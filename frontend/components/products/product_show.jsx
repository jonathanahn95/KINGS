import React from "react";
import { withRouter } from "react-router-dom";
import merge from "lodash/merge";
import { Link } from "react-router-dom";
import ProductShowInfo from "./product_show_info";
import ReactStars from "react-stars";

class ProductShow extends React.Component {
  componentDidMount() {
    this.props.fetchProduct(this.props.match.params);
  }

  render() {
    const { product, user } = this.props;
    let renderProductInfo = null;

    if (product) {
      renderProductInfo = [product].map((prod, idx) => {
        return (
          <ProductShowInfo
            product={product}
            key={idx}
            user={user}
            fetchUser={this.props.fetchUser}
          />
        );
      });
    }

    return <div>{renderProductInfo}</div>;
  }
}

export default withRouter(ProductShow);
