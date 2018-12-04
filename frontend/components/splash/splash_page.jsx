import React from "react";
import { Link } from "react-router-dom";
import ModalLinks from "../modals/modal_links";
import GreetingLinksContainer from "../greeting/greeting_links_container";

class SplashPage extends React.Component {
  constructor(props) {
    super(props);
  }

  toggleLinks() {
    if (this.props.currentUser) {
      return <GreetingLinksContainer />;
    } else {
      return <ModalLinks openModal={this.props.openModal} />;
    }
  }
  render() {
    return (
      <header>
        <nav className="header-nav">
          <div className="header-nav-left">
            <div className="kings-logo">KINGS</div>
            <form className="header-nav-form">
              <input
                placeholder="Search for items or shops"
                className="header-search-input"
              />
              <div>Search</div>
            </form>
          </div>
          {this.toggleLinks()}
        </nav>
      </header>
    );
  }
}

export default SplashPage;
