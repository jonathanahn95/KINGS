import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { closeModal } from "../../actions/modal_actions";
import { fetchUserProfInfo } from "../../actions/user_actions";
import UserProfile from "./user_profile";

const mapStateToProps = state => {
  return {
    products: state.entities.products,
    photos: state.entities.photos,
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToPros = dispatch => {
  return {
    closeModal: type => dispatch(closeModal(type)),
    fetchUserProfInfo: user => dispatch(fetchUserProfInfo(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(UserProfile);
