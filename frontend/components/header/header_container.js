import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { openModal } from "../../actions/modal_actions";
import Header from "./header";

const mapStateToProps = (state, ownProps) => {
  let cartHeader;
  if (ownProps.id) {
    cartHeader = ownProps.id;
  }
  return {
    cartHeader: cartHeader,
    url: ownProps.url,
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToPros = dispatch => {
  return {
    logout: () => dispatch(logout()),
    openModal: type => dispatch(openModal(type))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(Header);
