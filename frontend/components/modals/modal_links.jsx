import React from "react";
import { Link } from "react-router-dom";

class ModalLinks extends React.Component {
  render() {
    return (
      <ul className="header-nav-right">
        <li onClick={() => this.props.openModal("sell")}>Sell on KINGS</li>
        <li onClick={() => this.props.openModal("register")}>Register</li>
        <li
          onClick={() => this.props.openModal("login")}
          className="header-sign-in-li"
        >
          Sign In
        </li>
        <Link className="link" to="/products">
          <li className="header-discover-li">
            <i className="fas fa-search" />Discover
          </li>
        </Link>
        <li
          onClick={() => this.props.openModal("login")}
          className="header-cart-li"
        >
          <i className="fas fa-shopping-cart" />Cart
        </li>
      </ul>
    );
  }
}

export default ModalLinks;
