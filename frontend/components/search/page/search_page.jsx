import React from "react";
import { withRouter } from "react-router-dom";
import merge from "lodash/merge";
import { Link } from "react-router-dom";
import SearchDropDownContainer from "../dropdown/drop_down_container";
import { DebounceInput } from "react-debounce-input";
import HeaderContainer from "../../header/header_container";
import SearchFilterContainer from "../../search/filter/search_filter_container";
import SearchProduct from "./search_product";

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps, prevState) {
    debugger;
    if (this.props.location.search !== prevProps.location.search) {
      this.props.searchBusinesses(this.props.location.search.slice(1));
    }
  }

  componentDidMount() {
    this.props.searchBusinesses(this.props.location.search.slice(1));
  }

  render() {
    let { photos, products, users } = this.props;
    let searchProducts,
      productsCount = null;
    if (photos && products) {
      productsCount = Object.values(products).length;
      searchProducts = Object.values(products)
        .slice(0, 12)
        .map((prod, idx) => {
          return (
            <SearchProduct
              product={prod}
              key={idx}
              photos={photos}
              users={users}
            />
          );
        });
    }

    return (
      <div>
        <HeaderContainer url={this.props.location.pathname} />{" "}
        <ul className="small-nav-links">
          <li className="small-home">
            <Link className="show-home-link" to="/">
              Home
            </Link>
          </li>
          <i className="fa fa-caret-right" />
          <li className="small-name">Search</li>
          <i className="fa fa-caret-right" />
          <li className="small-item-count">{`(${productsCount} items)`}</li>
        </ul>
        <div className="big-name">{this.props.location.search.slice(1)}</div>
        <div className="filter-products">
          <SearchFilterContainer />
          <div className="products-container">{searchProducts}</div>
        </div>
      </div>
    );
  }
}

export default withRouter(SearchPage);
