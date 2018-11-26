import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import SplashPage from "./splash_page";

const mapStateToProps = state => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToPros = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(SplashPage);
