import React from "react";
import { Link } from "react-router-dom";

class CategoriesIndexItem extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <Link className="category-link" to={`/category/${category.id}`}>
        {category.category_name}
      </Link>
    );
  }
}

export default CategoriesIndexItem;
