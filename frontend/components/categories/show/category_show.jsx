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

  render() {
    let renderProducts = null;
    let {
      products,
      category,
      categoryName,
      photos,
      categoryId,
      users
    } = this.props;

    if (products && photos) {
      renderProducts = Object.values(products).map((prod, idx) => {
        return (
          <CategoryShowItem
            product={prod}
            key={idx}
            photos={photos}
            categoryId={categoryId}
            fetchUser={this.props.fetchUser}
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
          <li className="small-item-count">{`( items)`}</li>
        </ul>
        <div className="big-name">{categoryName}</div>
        <div className="products-container">{renderProducts}</div>
      </aside>
    );
  }
}

export default CategoryShow;
