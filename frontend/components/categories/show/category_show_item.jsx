import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";
import { render } from "react-dom";

class CategoryShowItem extends React.Component {
  render() {
    let { product, photos, categoryId, users } = this.props;
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
        <figure>
          <Link className="cat-show-link" to={`/product/${product.id}`}>
            <img className="cat-show-pic" src={photoSrc} />
          </Link>
        </figure>
        <Link className="cat-show-link" to={`/product/${product.id}`}>
          <li className="cat-show-description">
            {product.description.slice(0, 32)}
          </li>
        </Link>
        <Link className="cat-show-link" to={`/user_prof/${product.user_id}`}>
          <li className="cat-show-name">{userName}</li>
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
        <Link className="cat-show-link" to={`/product/${product.id}`}>
          <li className="cat-show-price">{`$${parseFloat(product.price).toFixed(
            2
          )}`}</li>
        </Link>
      </ul>
    );
  }
}

export default CategoryShowItem;
