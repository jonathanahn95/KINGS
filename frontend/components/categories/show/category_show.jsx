import React from "react";
import { Link } from "react-router-dom";

class CategoryShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSingleCategory(this.props.match.params);
    this.props.fetchCategoryProducts(this.props.match.params);
  }
  render() {
    debugger;
    return <div>s</div>;
  }
}

export default CategoryShow;
