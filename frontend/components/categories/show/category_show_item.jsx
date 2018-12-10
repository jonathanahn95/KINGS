import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";
import { render } from "react-dom";

class CategoryShowItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { product, photos, categoryId } = this.props;

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
