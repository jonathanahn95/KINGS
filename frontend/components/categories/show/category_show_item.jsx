import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";
import { render } from "react-dom";

class CategoryShowItem extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.product.user_id);
  }

  render() {
    let { product, photos, categoryId, users } = this.props;
    let userName = null;
    if (users[product.user_id]) {
      userName = users[product.user_id].fname;
    }
    return (
      <ul className="cat-show-prod-ul">
        <figure>
          <Link className="cat-show-link" to={`/product/${product.id}`}>
            <img src={photos[product.id][0].photo_image_url} />
          </Link>
        </figure>
        <Link className="cat-show-link" to={`/product/${product.id}`}>
          <li className="cat-show-description">{product.description}</li>
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
          <li className="cat-show-price">{`$${product.price}`}</li>
        </Link>
      </ul>
    );
  }
}

export default CategoryShowItem;
