import React from "react";
import { Link } from "react-router-dom";

class GreetingLinks extends React.Component {
  render() {
    return (
      <ul className="header-nav-right">
        <li>Sell on KINGS</li>
        <li className="greeting-discover">Discover</li>
        <li className="greeting-notifications">Notifications</li>
        <li
          onClick={() => this.props.openModal("userprof")}
          className="greeting-user"
        >
          You
        </li>
        <li className="header-cart-li">
          <i className="fas fa-shopping-cart" />Cart
        </li>
      </ul>
    );
  }
}

export default GreetingLinks;
