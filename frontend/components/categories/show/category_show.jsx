import React from "react";
import { Link } from "react-router-dom";
import CategoryShowItem from "./category_show_item";

class CategoryShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSingleCategory(this.props.match.params);
    this.props.fetchCategoryProducts(this.props.match.params);
  }
  render() {
    let renderProducts = null;
    let { products, category, categoryName } = this.props;

    if (products.length > 0) {
      renderProducts = products.map((product, idx) => {
        return <CategoryShowItem product={product} key={idx} />;
      });
    }

    return (
      <aside>
        <ul>
          <li>Home</li>
          <li>{categoryName}</li>
          <li>a</li>
        </ul>
        {renderProducts}
      </aside>
    );
  }
}

export default CategoryShow;
