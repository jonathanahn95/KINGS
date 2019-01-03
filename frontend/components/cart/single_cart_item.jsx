import React from "react";
import { Link } from "react-router-dom";

class SingleCartItem extends React.Component {
  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  updateQuantity(item) {
    return e =>
      this.props.updateItem({
        id: item.id,
        product_id: item.product_id,
        user_id: this.props.currentUser.id,
        quantity: e.target.value
      });
  }

  render() {
    const {
      id,
      user_id,
      product_id,
      quantity,
      name,
      price,
      description
    } = this.props.item;
    let totalPrice = price * quantity;
    let photoSrc = null;
    const itemPhotos = this.props.photos[product_id];

    if (this.props.photos[product_id]) {
      photoSrc = itemPhotos[0].photo_image_url;
    }

    return (
      <div className="single-cart-item">
        <Link to={`/product/${product_id}`}>
          <img className="single-cart-item-photo" src={photoSrc} />
        </Link>
        <div className="cart-item-info">
          <ul className="cart-item-info-ul">
            <Link
              className="single-cart-item-description"
              to={`/product/${product_id}`}
            >
              <li>{description}</li>
            </Link>
            <select
              className="cart-quantity"
              type="quantity"
              value={quantity}
              onChange={this.updateQuantity(this.props.item)}
            >
              >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <li className="item-total-price">
              ${parseFloat(totalPrice).toFixed(2)}
              <p className="item-ind-price">
                (${parseFloat(price).toFixed(2)} each)
              </p>
            </li>
          </ul>
          <button
            onClick={() => this.props.deleteItem(id)}
            className="remove-from-cart"
          >
            Remove
          </button>
        </div>
      </div>
    );
  }
}

export default SingleCartItem;
