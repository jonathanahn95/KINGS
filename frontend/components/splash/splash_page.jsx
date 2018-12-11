import React from "react";
import { Link } from "react-router-dom";
import SplashHeaderInfo from "./splash_header_info";
import SplashPopularItems from "./splash_popular_items";

class SplashPage extends React.Component {
  render() {
    return (
      <main>
        <SplashHeaderInfo />
        <SplashPopularItems />
      </main>
    );
  }
}

export default SplashPage;
