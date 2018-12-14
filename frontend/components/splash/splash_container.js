import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { openModal } from "../../actions/modal_actions";
import SplashPage from "./splash_page";
import { fetchAllProducts } from "../../actions/product_actions";
import { fetchUser, fetchAllUsers } from "../../actions/user_actions";

const mapStateToProps = state => {
  let photos,
    products = null;
  if (state.entities.products["products"]) {
    products = state.entities.products["products"];
    photos = state.entities.products["photos"];
  }

  return {
    currentUser: state.entities.users[state.session.id],
    products: products,
    photos: photos,
    users: state.entities.users
  };
};

const mapDispatchToPros = dispatch => {
  return {
    logout: () => dispatch(logout()),
    openModal: type => dispatch(openModal(type)),
    fetchAllProducts: () => dispatch(fetchAllProducts()),
    fetchAllUsers: () => dispatch(fetchAllUsers())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(SplashPage);
