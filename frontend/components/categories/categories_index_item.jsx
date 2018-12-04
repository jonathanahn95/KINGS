import React from "react";
import { Link } from "react-router-dom";

class CategoriesIndexItem extends React.Component {
  render() {
    return <li>{this.props.category.category_name}</li>;
  }
}

export default CategoriesIndexItem;
