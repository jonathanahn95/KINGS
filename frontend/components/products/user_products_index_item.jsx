import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import ProductShowInfo from "./product_show_info";

class UserProductsIndexItem extends React.Component {
  render() {
    const { product, photos } = this.props;
    const photoSrc = photos[product.id][0].photo_image_url;
    return (
      <div className="single-user-prod">
        <Link
          target="_blank"
          className="single-user-link"
          to={`/product/${product.id}`}
        >
          <ul className="single-user-info">
            <li>
              <img className="user-prod-pic" src={photoSrc} />
            </li>
            <li className="user-prod-description">
              {product.description.slice(0, 20)}
            </li>
            <li className="user-prod-price">{`$${product.price}`}</li>
          </ul>
        </Link>
      </div>
    );
  }
}

export default withRouter(UserProductsIndexItem);
