import React from "react";
import { withRouter } from "react-router-dom";
import merge from "lodash/merge";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";
import UserProductsContainer from "./user_products_container";

class ProductShowInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      product_id: parseInt(this.props.match.params.id)
    };
    this.selectQuantity = this.selectQuantity.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.addToCart = this.props.addToCart.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.product.user_id);
  }

  handleClick(e) {
    e.preventDefault();

    this.addToCart(this.state).then(() => this.props.history.push("/cart"));
  }

  selectQuantity(e) {
    this.setState({ quantity: parseInt(e.target.value) });
  }

  render() {
    const {
      product,
      user,
      photos,
      userProducts,
      userProductPhotos
    } = this.props;
    const { rating, description, price } = product;
    let renderUsersProducts = null;
    let userName,
      renderPhoto = null;

    if (user[product.user_id]) {
      userName = user[product.user_id].fname;
      renderPhoto = photos[0].photo_image_url;
    }

    return (
      <div>
        <nav className="prod-show-h2">
          <ul className="prod-show-user-info">
            <li className="prod-show-user-star">
              <img
                className="prod-show-user-img"
                src="https://s3.amazonaws.com/kings-2-dev/user_prof.png"
              />
              <p>{userName}</p>
            </li>
            <li>
              <ReactStars
                color2={"black"}
                count={5}
                edit={false}
                value={rating}
                size={18}
              />
            </li>
          </ul>
          <figure>
            <img className="prod-show-pictures" src={renderPhoto} />
          </figure>
        </nav>
        <section className="prod-show-middle-section">
          <section>
            <figure className="prod-show-main-pic-wrapper">
              <img className="prod-show-main-pic" src={renderPhoto} />
            </figure>
            <div className="prod-show-main-description">
              <h2 className="prod-show-main-description-header">Description</h2>
              <div className="prod-show-main-description-text">
                {description}
              </div>
            </div>
          </section>
          <div className="prod-show-form-wrapper">
            <form className="prod-show-form">
              <div className="prod-show-description">{description}</div>
              <div className="prod-show-price-quest">
                <p className="prod-show-price">{`$${price}`}</p>
                <p className="prod-ask-question">Ask a question</p>
              </div>
              <div className="prod-show-select-size">
                <h3 className="prod-show-size">Size</h3>
                <select className="custom-select" type="size">
                  <option value="Select an option">Select an option</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                </select>
              </div>
              <div className="prod-show-select-quantity">
                <h3 className="prod-show-quantity">Quanity</h3>
                <select
                  className="custom-select-2"
                  type="quantity"
                  value={this.state.quantity}
                  onChange={this.selectQuantity}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
              <input
                className="prod-show-form-submit"
                type="submit"
                onClick={this.handleClick}
                value="Add to Cart"
              />
            </form>
            <div className="prod-show-like-wrapper">
              <figure>
                <img src="https://s3.amazonaws.com/kings-2-dev/prod_show_cart.png" />
              </figure>
              <aside className="prod-show-like">
                <span className="prod-show-like-child">
                  Other people want this.
                </span>
                15 people have this in their carts right now.
              </aside>
            </div>
            <aside className="prod-show-overview-wrapper">
              <div className="prod-show-overview">Overview</div>
              <ul className="prod-show-overview-ul">
                <li>Handmade item</li>
                <li>Can be personalized: Yes</li>
                <li>Made to order</li>
              </ul>
            </aside>
            <aside className="prod-show-overview-wrapper">
              <div className="prod-show-overview">Shipping & returns</div>
              <ul className="prod-show-overview-ul">
                <li>Ready to ship in 2–4 weeks</li>
                <li>From United States</li>
              </ul>
            </aside>
            <aside className="user-product-section">
              <h2 className="user-prod-name">{userName}</h2>
              <UserProductsContainer />
            </aside>
          </div>
        </section>
      </div>
    );
  }
}

export default withRouter(ProductShowInfo);
