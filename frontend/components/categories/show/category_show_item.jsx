import React from "react";
import { Link } from "react-router-dom";

class CategoryShowItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { product, photos, categoryId } = this.props;
    debugger;

    return (
      <ul>
        <figure>
          <img src={photos[product.id][0].photo_image_url} />
        </figure>
        <li>{product.description}</li>
        <li>{product.rating}</li>
        <li>{product.price}</li>
      </ul>
    );
  }
}

export default CategoryShowItem;
