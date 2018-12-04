import React from "react";
import { Link } from "react-router-dom";
import CategoriesIndexItem from "./categories_index_item";

class Categories extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllCategories();
  }
  render() {
    let categories = this.props.categories;
    if (categories.length > 0) {
      categories = categories.map((cat, idx) => {
        return <CategoriesIndexItem category={cat} key={idx} />;
      });
    }
    return (
      <nav className="categories-container">
        <ul className="categories-ul">{categories}</ul>
      </nav>
    );
  }
}

export default Categories;
