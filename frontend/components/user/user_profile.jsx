import React from "react";
import { withRouter } from "react-router-dom";
import merge from "lodash/merge";
import { Link } from "react-router-dom";
import HeaderContainer from "../header/header_container";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUserProfInfo(this.props.currentUser.id);
  }

  singleProduct(prod, photos) {
    let photoSrc;
    if (photos[prod.id] && photos[prod.id].length > 0) {
      photoSrc = photos[prod.id][0].photo_image_url;
    }

    return (
      <li className="user-single-prod" key={prod.id}>
        <Link className="cat-show-link" to={`/product/${prod.id}`}>
          <img className="user-prod-img" src={photoSrc} />
        </Link>
        <div className="user-prod-info">
          <div className="user-prod-title">{prod.title}</div>
          <div className="user-prod-price">{`$${parseFloat(prod.price).toFixed(
            2
          )}`}</div>
        </div>
      </li>
    );
  }

  render() {
    const { currentUser, photos, products } = this.props;
    const userProducts = Object.values(products).map((prod, idx) => {
      return this.singleProduct(prod, photos);
    });
    return (
      <nav>
        <HeaderContainer url={this.props.location.pathname} />
        <div className="user-prof-wrapper">
          <section className="user-prof-section">
            <div className="user-show-left">
              <img src="https://s3.amazonaws.com/kings-2-dev/user_prof.png" />
              {currentUser.fname}
            </div>
            <div className="user-show-right">
              <div className="user-show-right-top">
                <div className="user-right-name">
                  {currentUser.fname}'s' profile
                </div>
                <Link className="link" to="/items/new">
                  <div className="create-an-item">Create an item!</div>
                </Link>
              </div>
              <ul className="user-prof-products">{userProducts}</ul>
            </div>
          </section>
        </div>
      </nav>
    );
  }
}

export default withRouter(UserProfile);
