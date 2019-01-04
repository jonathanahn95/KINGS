import React from "react";
import { Link } from "react-router-dom";
import ModalLinks from "../modals/modal_links";
import GreetingLinksContainer from "../greeting/greeting_links_container";
import CategoriesContainer from "../categories/index/categories_container";
import SearchFormContainer from "../search//form/search_form_container";

class Header extends React.Component {
  toggleLinks() {
    if (this.props.currentUser) {
      return <GreetingLinksContainer />;
    } else {
      return (
        <ModalLinks
          closeModal={this.props.closeModal}
          openModal={this.props.openModal}
        />
      );
    }
  }
  render() {
    return (
      <header id={this.props.cartHeader}>
        <nav className="header-nav">
          <div className="header-nav-left">
            <Link className="link-kings-logo" to="/">
              <div className="kings-logo">KINGS</div>
            </Link>
            <SearchFormContainer url={this.props.url} />
          </div>
          {this.toggleLinks()}
        </nav>
        <CategoriesContainer />
      </header>
    );
  }
}

export default Header;
