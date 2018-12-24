import React from "react";
import { Link } from "react-router-dom";
import SingleCartItem from "./single_cart_item";

class CartItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boughtItems: false
    };
    this.checkOut = this.checkOut.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchCartItems();
  }

  checkOut() {
    this.props.checkOut().then(() => this.setState({ boughtItems: true }));
  }

  processedOrder() {
    const { boughtItems } = this.state;
    let greetingMsg = "Your cart is empty.";
    let navLink = "Discover something unique to fill it up";
    if (boughtItems) {
      greetingMsg = "Thank you for your order!";
      navLink = "Continue Shopping";
    }

    return (
      <div className="processed-order-container">
        <div className="processed-order-section">
          <div className="text-area">{greetingMsg}</div>
          <div className="order-link">
            <Link className="discover" to="/products">
              <div>{navLink}</div>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  shoppingCart() {
    const { photos, updateItem, currentUser, deleteItem, items } = this.props;
    const itemLength = items.length;

    let totalPrice = 0;
    const renderItems = items.map((item, idx) => {
      totalPrice += item.price * item.quantity;
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

    return (
      <section className="cart-container">
        <div className="cart-header">
          <div>{itemLength} items in your cart</div>
          <button className="keep-shopping">Keep Shopping</button>
        </div>
        <div className="cart-section">
          <div className="cart-items-container">{renderItems}</div>
          <div className="checkout-section">
            <div className="total-price">
              <div>Items Total</div>
              <div>{totalPrice}</div>
            </div>
            <button onClick={this.checkOut} className="checkout">
              Proceed to checkout
            </button>
          </div>
        </div>
      </section>
    );
  }

  render() {
    return this.props.items.length > 0
      ? this.shoppingCart()
      : this.processedOrder();
  }
}

export default CartItems;
