import React from "react";
import { withRouter } from "react-router-dom";
import merge from "lodash/merge";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";
import HeaderContainer from "../../header/header_container";
import ProductsIndexItem from "./products_index_item";
import SearchFilterContainer from "../../search/filter/search_filter_container";

class ProductsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllProducts();
  }

  render() {
    let { photos, products, users } = this.props;
    let renderPopularContent,
      productsCount = null;
    if (photos && products) {
      productsCount = Object.values(products).length;
      renderPopularContent = Object.values(products)
        .slice(0, 12)
        .map((prod, idx) => {
          return (
            <ProductsIndexItem
              product={prod}
              key={idx}
              photos={photos}
              users={users}
            />
          );
        });
    }

    return (
      <main>
        <HeaderContainer url={this.props.location.pathname} />
        <ul className="small-nav-links">
          <li className="small-home">
            <Link className="show-home-link" to="/">
              Home
            </Link>
          </li>
          <i className="fa fa-caret-right" />
          <li className="small-name">Products</li>
          <i className="fa fa-caret-right" />
          <li className="small-item-count">{`(${productsCount} items)`}</li>
        </ul>
        <div className="big-name">Products</div>
        <div className="filter-products">
          <SearchFilterContainer />
          <ul className="products-container">{renderPopularContent}</ul>
        </div>
      </main>
    );
  }
}

export default withRouter(ProductsIndex);
