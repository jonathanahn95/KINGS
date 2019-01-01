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
    this.props.history.push("/");
  }

  render() {
    return (
      <nav>
        <div>
          <figure>
            <i className="far fa-user" />
          </figure>
          <div>
            <p>{this.props.currentUser.fname}</p>
            <div>View Profile</div>
          </div>
          <li onClick={this.logoutUser}>Logout</li>
        </div>
      </nav>
    );
  }
}

export default withRouter(UserProfile);
