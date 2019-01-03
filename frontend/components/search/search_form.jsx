import React from "react";
import { withRouter } from "react-router-dom";
import merge from "lodash/merge";
import { Link } from "react-router-dom";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form className="header-nav-form">
        <input
          placeholder="Search for items or shops"
          className="header-search-input"
        />
        <div className="search-text">Search</div>
      </form>
    );
  }
}

export default withRouter(SearchForm);
