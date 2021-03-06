import React from "react";
import { Link } from "react-router-dom";
import CategoryShowItem from "./category_show_item";
import SearchFilterContainer from "../../search/filter/search_filter_container";
import HeaderContainer from "../../header/header_container";

class CategoryShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSingleCategory(this.props.match.params);
    this.props.clearDropDownResults();
  }

  componentDidUpdate(prevProps, prevState) {
    this.props.clearDropDownResults();
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.props.fetchSingleCategory(this.props.match.params);
    }
  }

  render() {
    let renderProducts,
      productsCount = null;
    let {
      products,
      category,
      categoryName,
      photos,
      categoryId,
      users
    } = this.props;

    if (products && photos && Object.values(products).length > 0) {
      productsCount = Object.values(products).length;
      renderProducts = Object.values(products).map((prod, idx) => {
        return (
          <CategoryShowItem
            product={prod}
            key={idx}
            photos={photos}
            categoryId={categoryId}
            users={users}
          />
        );
      });
    } else {
      renderProducts = (
        <div className="show-no-results">
          <img
            className="no-results-img"
            src="https://s3.amazonaws.com/kings-2-dev/no_results.png"
          />
          <p>We couldnt find any results</p>
        </div>
      );
    }

    return (
      <aside>
        <HeaderContainer url={this.props.location.pathname} />
        <ul className="small-nav-links">
          <li className="small-home">
            <Link className="show-home-link" to="/">
              Home
            </Link>
          </li>
          <i className="fa fa-caret-right" />
          <li className="small-name">{categoryName}</li>
          <i className="fa fa-caret-right" />
          <li className="small-item-count">{`(${productsCount} items)`}</li>
        </ul>
        <div className="big-name">{categoryName}</div>
        <div className="filter-products">
          <SearchFilterContainer categoryId={categoryId} />
          <div className="products-container">{renderProducts}</div>
        </div>
      </aside>
    );
  }
}

export default CategoryShow;
