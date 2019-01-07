import React from "react";
import { withRouter } from "react-router-dom";
import merge from "lodash/merge";
import { Link } from "react-router-dom";
import SearchDropDownContainer from "../dropdown/drop_down_container";
import { DebounceInput } from "react-debounce-input";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdown: "hide",
      searchData: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ searchData: "" });
    this.props.history.push(`/search?${this.state.searchData}`);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.url !== prevProps.url) {
      this.setState({
        searchData: "",
        dropdown: "hide",
        searching: false
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
    this.props.requestDropDownList(this.state.searchData);
  }

  render() {
    return (
      <form className="header-nav-form" onSubmit={this.handleSubmit}>
        <div className="header-nav-form-div">
          <DebounceInput
            className="header-search-input"
            placeholder="Search for items or shops"
            minLength={1}
            debounceTimeout={300}
            value={this.state.searchData}
            onChange={this.update("searchData")}
          />

          <div className="search-text">Search</div>
        </div>
        <SearchDropDownContainer dropdown={this.state.dropdown} />
      </form>
    );
  }
}

export default withRouter(SearchForm);
