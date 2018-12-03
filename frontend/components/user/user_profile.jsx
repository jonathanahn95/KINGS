import React from "react";
import { withRouter } from "react-router-dom";
import merge from "lodash/merge";
import { Link } from "react-router-dom";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
  }

  logoutUser() {
    this.props.logout();
    this.props.closeModal();
  }

  render() {
    return (
      <div>
        <li onClick={this.logoutUser}>Logout</li>
      </div>
    );
  }
}

export default withRouter(UserProfile);
