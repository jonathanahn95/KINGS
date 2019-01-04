import React from "react";
import { Link } from "react-router-dom";
import SplashHeaderInfo from "./splash_header_info";
import SplashPopularItems from "./splash_popular_items";
import HeaderContainer from "../header/header_container";

class SplashPage extends React.Component {
  componentDidMount() {
    this.props.fetchAllProducts();
    this.props.clearDropDownResults();
  }

  render() {
    let { photos, products, users } = this.props;
    let renderPopularContent = null;
    if (photos && products) {
      renderPopularContent = Object.values(products)
        .slice(0, 5)
        .map((prod, idx) => {
          return (
            <SplashPopularItems
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
        <SplashHeaderInfo />
        <p className="splash-popular-text">Popular right now</p>
        <ul className="splash-popular-wrapper">{renderPopularContent}</ul>
      </main>
    );
  }
}

export default SplashPage;
