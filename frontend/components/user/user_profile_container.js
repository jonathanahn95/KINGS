import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { closeModal } from "../../actions/modal_actions";
import UserProfile from "./user_profile";

const mapStateToProps = state => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToPros = dispatch => {
  return {
    logout: () => dispatch(logout()),
    closeModal: type => dispatch(closeModal(type))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(UserProfile);
