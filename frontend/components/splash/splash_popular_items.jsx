import React from "react";
import { withRouter, Link } from "react-router-dom";

class SplashPopularItems extends React.Component {
  render() {
    const { product, photos, users } = this.props;
    let userName,
      photoSrc = null;
    if (users[product.user_id]) {
      userName = users[product.user_id].fname;
    }

    if (photos[product.id]) {
      photoSrc = photos[product.id][0].photo_image_url;
    }

    return (
      <div>
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
        <Link className="splash-pop-link" to={`/product/${product.id}`}>
          <li className="splash-pop-price">{`$${product.price}`}</li>
        </Link>
      </div>
    );
  }
}

export default SplashPopularItems;
