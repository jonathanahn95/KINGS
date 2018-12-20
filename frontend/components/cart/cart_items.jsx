import React from "react";
import { Link } from "react-router-dom";
import SingleCartItem from "./single_cart_item";

class CartItems extends React.Component {
  componentDidMount() {
    this.props.fetchCartItems();
  }

  render() {
    const { photos, updateItem, currentUser, deleteItem } = this.props;
    const renderItems = this.props.items.map((item, idx) => {
      return (
        <SingleCartItem
          key={idx}
          item={item}
          photos={photos}
          updateItem={updateItem}
          currentUser={currentUser}
          deleteItem={deleteItem}
        />
      );
    });
    const itemLength = renderItems.length;
    return (
      <section>
        <div className="cart-header">
          <div>{itemLength} items in your cart</div>
          <button className="keep-shopping">Keep Shopping</button>
        </div>
        <div className="cart-section">
          <div className="cart-items-container">{renderItems}</div>
          <div className="checkout-section">
            <div className="total-price">
              <div>Items Total</div>
              <div>a</div>
            </div>
            <button className="checkout">Proceed to checkout</button>
          </div>
        </div>
      </section>
    );
  }
}

export default CartItems;
