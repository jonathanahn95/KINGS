import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { openModal } from "../../actions/modal_actions";
import SplashPage from "./splash_page";
import { fetchAllProducts } from "../../actions/product_actions";
import { clearDropDownResults } from "../../actions/search_actions";

const mapStateToProps = state => {
  let photos,
    products = null;
  if (Object.values(state.entities.products).length > 0) {
    products = state.entities.products;
    photos = state.entities.photos;
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
    clearDropDownResults: () => dispatch(clearDropDownResults()),
    openModal: type => dispatch(openModal(type)),
    fetchAllProducts: () => dispatch(fetchAllProducts())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(SplashPage);
