import React from "react";
import { Link } from "react-router-dom";
import CategoryShowItem from "./category_show_item";

class CategoryShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSingleCategory(this.props.match.params);
  }

  componentDidUpdate(prevProps, prevState) {
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

    if (products && photos) {
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
    }

    return (
      <aside>
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
        <div className="products-container">{renderProducts}</div>
      </aside>
    );
  }
}

export default CategoryShow;
