import React from "react";
import { withRouter } from "react-router-dom";
import merge from "lodash/merge";
import { Link } from "react-router-dom";
import ProductShowItem from "./product_show_item";
import ReactStars from "react-stars";

class ProductShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProduct(this.props.match.params);
    this.props.fetchAllUsers();
  }

  render() {
    const { product, users } = this.props;
    let renderProductInfo = null;

    if (product && users && users[product.user_id]) {
      renderProductInfo = [product].map((prod, idx) => {
        return <ProductShowItem product={product} key={idx} users={users} />;
      });
    }

    return <div>{renderProductInfo}</div>;
  }
}

export default withRouter(ProductShow);
