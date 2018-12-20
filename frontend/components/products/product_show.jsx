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
    const {
      product,
      user,
      photos,
      userProducts,
      userProductPhotos,
      addToCart
    } = this.props;
    let renderProductInfo = null;
    if (product) {
      renderProductInfo = (
        <ProductShowInfo
          product={product}
          key={product.id}
          user={user}
          photos={photos}
          userProducts={userProducts}
          fetchUser={this.props.fetchUser}
          addToCart={addToCart}
          userProductPhotos={userProductPhotos}
        />
      );
    }

    return <div>{renderProductInfo}</div>;
  }
}

export default withRouter(ProductShow);
