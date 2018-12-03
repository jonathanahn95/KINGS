import React from "react";
import { withRouter } from "react-router-dom";
import merge from "lodash/merge";
import { Link } from "react-router-dom";

class LogInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  logInForm() {
    return (
      <div className="sign-in-modal">
        <div className="sign-in-greeting">Sign in to continue</div>
        <form className="session-form">
          <div className="session-form-email">Email address:</div>
          <input className="session-form-email-input" type="text" />
          <div className="session-form-password">Password:</div>
          <input className="session-form-password-input" type="password" />
          <input
            className="session-form-submit"
            type="submit"
            value="Sign in"
          />
        </form>

        <fieldset className="hr-line">
          <legend align="center">OR</legend>
        </fieldset>

        <div className="modal-demo">Guest Demo</div>
      </div>
    );
  }

  signUpForm() {
    return (
      <div className="sign-in-modal">
        <div className="sign-in-greeting">Sign in to continue</div>
        <form className="session-form">
          <div className="session-form-email">Email address:</div>
          <input className="session-form-email-input" type="text" />
          <div className="session-form-name">First name:</div>
          <input className="session-form-name-input" type="text" />
          <div className="session-form-password">Password:</div>
          <input className="session-form-password-input" type="password" />
          <input
            className="session-form-submit"
            type="submit"
            value="Register"
          />
        </form>

        <fieldset className="hr-line">
          <legend align="center">OR</legend>
        </fieldset>

        <div className="modal-demo">Guest Demo</div>
      </div>
    );
  }

  render() {
    if (this.props.formType === "Login") {
      return this.logInForm();
    } else {
      return this.signUpForm();
    }
  }
}

export default withRouter(LogInForm);
