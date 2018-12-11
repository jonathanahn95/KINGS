import React from "react";
import { withRouter, Link } from "react-router-dom";

class SplashPopularItems extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.product.user_id);
  }

  render() {
    const { product, photos, users } = this.props;
    let userName = null;
    if (users[product.user_id]) {
      userName = users[product.user_id].fname;
    }
    return (
      <div>
        <img
          className="splash-pop-pic"
          src={photos[product.id][0].photo_image_url}
        />
        <figcaption className="splash-pop-description">
          {product.description}
        </figcaption>
        <li className="splash-pop-username">{userName}</li>
        <li className="splash-pop-price">{`$${product.price}`}</li>
      </div>
    );
  }
}

export default SplashPopularItems;
