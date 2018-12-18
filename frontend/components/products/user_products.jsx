import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";
import UserProductsIndexItem from "./user_products_index_item";

class UserProducts extends React.Component {
  componentDidMount() {
    this.props.fetchUser(
      this.props.userProducts[this.props.match.params.id].user_id
    );
  }

  render() {
    const renderItems = Object.values(this.props.userProducts)
      .slice(0, 8)
      .map((prod, idx) => {
        return (
          <UserProductsIndexItem
            key={idx}
            product={prod}
            photos={this.props.userProductPhotos}
          />
        );
      });
    return <div className="user-products-container">{renderItems}</div>;
  }
}

export default withRouter(UserProducts);
