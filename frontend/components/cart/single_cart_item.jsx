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
    const itemPhotos = this.props.photos[product_id];
    let photoSrc = null;

    if (this.props.photos[product_id]) {
      photoSrc = itemPhotos[0].photo_image_url;
    }

    let totalPrice = price * quantity;

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
              ${totalPrice}
              <p className="item-ind-price">(${price} each)</p>
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
