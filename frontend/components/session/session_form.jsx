import React from "react";
import { withRouter } from "react-router-dom";
import merge from "lodash/merge";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      fname: ""
    };
    this.guestDemo = this.guestDemo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    debugger;
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal());
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.currentTarget.value
      });
    };
  }

  guestDemo(e) {
    e.preventDefault();
    const user = {
      email: "guest@demo.org",
      password: "123123",
      fname: "Guest"
    };
    this.props.processForm(user).then(this.props.closeModal());
  }

  logInForm() {
    return (
      <div className="sign-in-modal">
        <div className="sign-in-greeting">Sign in to continue</div>
        <form onSubmit={this.handleSubmit} className="session-form">
          <div className="session-form-email">Email address:</div>
          <input
            onChange={this.update("email")}
            className="session-form-email-input"
            type="text"
          />
          <div className="session-form-password">Password:</div>
          <input
            onChange={this.update("password")}
            className="session-form-password-input"
            type="password"
          />
          <input
            className="session-form-submit"
            type="submit"
            value="Sign in"
          />
        </form>

        <fieldset className="hr-line">
          <legend align="center">OR</legend>
        </fieldset>

        <div onClick={this.guestDemo} className="modal-demo">
          Guest Demo
        </div>
      </div>
    );
  }

  signUpForm() {
    return (
      <div className="sign-in-modal">
        <div className="sign-in-greeting">Create Your Account</div>
        <p className="easy-register">Registration is easy.</p>
        <form onSubmit={this.handleSubmit} className="session-form">
          <div className="session-form-email">Email address:</div>
          <input
            onChange={this.update("email")}
            className="session-form-email-input"
            type="text"
          />
          <div className="session-form-name">First name:</div>
          <input
            onChange={this.update("fname")}
            className="session-form-name-input"
            type="text"
          />
          <div className="session-form-password">Password:</div>
          <input
            onChange={this.update("password")}
            className="session-form-password-input"
            type="password"
          />
          <input
            className="session-form-submit"
            type="submit"
            value="Register"
          />
        </form>

        <fieldset className="hr-line">
          <legend align="center">OR</legend>
        </fieldset>

        <div onClick={this.guestDemo} className="modal-demo">
          Guest Demo
        </div>
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

export default withRouter(SessionForm);
