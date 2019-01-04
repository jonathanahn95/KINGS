import React from "react";
import { withRouter } from "react-router-dom";
import merge from "lodash/merge";
import { Link } from "react-router-dom";

class DropDown extends React.Component {
  dropDownItem(product, idx) {
    let toggle;
    if (idx === 0) {
      toggle = "item-1";
    }
    if (idx === this.props.products.length - 1) {
      toggle = "item-2";
    }
    return (
      <Link className="link" to={`/product/${product.id}`} key={idx}>
        <li id={toggle} className="dropdown-item">
          {product.title}
        </li>
      </Link>
    );
  }

  render() {
    let products = this.props.products.map((prod, idx) => {
      return this.dropDownItem(prod, idx);
    });

    let toggleClass = this.props.dropdown;
    if (this.props.products.length === 0) {
      products = null;
      toggleClass = "hide";
    }

    return <ul className={`dropdown-wrapper ${toggleClass}`}>{products}</ul>;
  }
}

export default withRouter(DropDown);
