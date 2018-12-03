import React from "react";
import { Link } from "react-router-dom";
import LogInForm from "../session/login_form";
import ModalLinks from "../modals/modal_links";

class SplashPage extends React.Component {
  constructor(props) {
    super(props);
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
          <ModalLinks openModal={this.props.openModal} />
        </nav>
      </header>
    );
  }
}

export default SplashPage;
