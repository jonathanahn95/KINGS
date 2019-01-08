import React from "react";
import { Link } from "react-router-dom";

class GreetingLinks extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
  }

  logoutUser() {
    this.props.logout();
  }

  render() {
    return (
      <ul className="header-nav-right">
        <li>Sell on KINGS</li>
        <Link className="link" to="/products">
          <li className="greeting-discover">Discover</li>
        </Link>
        <li className="greeting-user">You</li>
        <Link className="link" to="/">
          <li onClick={this.logoutUser} className="greeting-notifications">
            Log Out
          </li>
        </Link>
        <Link className="shopping-cart" to="/cart">
          <li className="header-cart-li">
            <i className="fas fa-shopping-cart" />Cart
          </li>
        </Link>
      </ul>
    );
  }
}

export default GreetingLinks;
