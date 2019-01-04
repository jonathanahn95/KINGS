import React from "react";
import { withRouter } from "react-router-dom";
import merge from "lodash/merge";
import { Link } from "react-router-dom";
import SearchDropDownContainer from "../dropdown/drop_down_container";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdown: "hide",
      searchData: "",
      hidden: true
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({
        searchData: "",
        dropdown: "hide"
      });
    } else {
      this.props.requestDropDownList(this.state.searchData);
    }
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.target.value,
        dropdown: "show"
      });
    };
  }

  render() {
    return (
      <form className="header-nav-form">
        <div className="header-nav-form-div">
          <input
            onChange={this.update("searchData")}
            type="search"
            placeholder="Search for items or shops"
            className="header-search-input"
            value={this.state.searchData}
          />
          <div className="search-text">Search</div>
        </div>
        <SearchDropDownContainer
          hidden={this.state.hidden}
          dropdown={this.state.dropdown}
        />
      </form>
    );
  }
}

export default withRouter(SearchForm);
