import React from "react";
import { closeModal } from "../../actions/modal_actions";
import { removeErrors } from "../../actions/session_actions";
import { connect } from "react-redux";
import LoginFormContainer from "../session/login_form_container";
import SignupFormContainer from "../session/signup_form_container";
import UserProfileContainer from "../user/user_profile_container";
import { withRouter } from "react-router-dom";

function Modal({ modal, closeModal, removeErrors }) {
  if (!modal) {
    return null;
  }
  debugger;
  let component;
  switch (modal) {
    case "login":
      component = <LoginFormContainer />;
      break;
    case "register":
      component = <SignupFormContainer />;
      break;
    case "sell":
      component = <LoginFormContainer />;
      break;
    case "userprof":
      component = <UserProfileContainer />;
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-background" onClick={removeErrors}>
        <div
          id={`${modal}`}
          className="modal-child"
          onClick={e => e.stopPropagation()}
        >
          {component}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.entities.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Modal)
);
