import React from "react";
import { withRouter, Link } from "react-router-dom";
import ReactStars from "react-stars";

class ProductsIndexItem extends React.Component {
  render() {
    const { product, photos, users } = this.props;
    let userName,
      photoSrc = null;
    if (users[product.user_id]) {
      userName = users[product.user_id].fname;
    }

    if (photos[product.id] && photos[product.id].length > 0) {
      photoSrc = photos[product.id][0].photo_image_url;
    }

    return (
      <ul className="cat-show-prod-ul">
        <Link className="splash-pop-link" to={`/product/${product.id}`}>
          <img className="splash-pop-pic" src={photoSrc} />
        </Link>
        <Link className="splash-pop-link" to={`/product/${product.id}`}>
          <figcaption className="splash-pop-description">
            {product.description.slice(0, 30)}
          </figcaption>
        </Link>
        <Link className="splash-pop-link" to={`/user_prof/${product.user_id}`}>
          <li className="splash-pop-username">{userName}</li>
        </Link>
        <Link className="cat-show-link" to={`/product/${product.id}`}>
          <li>
            <ReactStars
              color2={"black"}
              count={5}
              edit={false}
              value={product.rating}
              size={18}
            />
          </li>
        </Link>
        <Link className="splash-pop-link" to={`/product/${product.id}`}>
          <li className="cat-show-price">{`$${parseFloat(product.price).toFixed(
            2
          )}`}</li>
        </Link>
      </ul>
    );
  }
}

export default ProductsIndexItem;
