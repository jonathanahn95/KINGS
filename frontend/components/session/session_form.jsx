import React from "react";
import { withRouter } from "react-router-dom";
import merge from "lodash/merge";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      fname: "",
      email: ""
    };
    this.guestDemo = this.guestDemo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.signup(user).then(this.props.closeModal());
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
    debugger;
    this.props.login(user).then(this.props.closeModal());
  }

  render() {
    let registerGreeting,
      signupInput = null;
    if (this.props.formType === "Signup") {
      (registerGreeting = (
        <p className="easy-register">Registration is easy.</p>
      )),
        (signupInput = (
          <div>
            <div className="session-form-name">First name:</div>
            <input
              onChange={this.update("fname")}
              className="session-form-name-input"
              type="text"
            />
          </div>
        ));
    }

    return (
      <div className="sign-in-modal">
        <div className="sign-in-greeting">{this.props.greeting}</div>
        {registerGreeting}
        <form onSubmit={this.handleSubmit} className="session-form">
          <div className="session-form-email">Email address:</div>
          <input
            onChange={this.update("email")}
            className="session-form-email-input"
            type="text"
          />
          {signupInput}
          <div className="session-form-password">Password:</div>
          <input
            onChange={this.update("password")}
            className="session-form-password-input"
            type="password"
          />
          <input
            className="session-form-submit"
            type="submit"
            value={this.props.value}
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
}

export default withRouter(SessionForm);
