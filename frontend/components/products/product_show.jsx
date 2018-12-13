import React from "react";
import { withRouter } from "react-router-dom";
import merge from "lodash/merge";
import { Link } from "react-router-dom";
import ProductShowItem from "./product_show";
import ReactStars from "react-stars";

class ProductShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProduct(this.props.match.params);
    this.props.fetchAllUsers();
  }

  render() {
    const product = this.props.product;
    const users = this.props.users;
    let rating,
      description,
      user,
      photos,
      price = null;

    if (product && users && users[product.user_id]) {
      rating = product.rating;
      description = product.description;
      photos = product.photos[0].photo_image_url;
      price = product.price;
      user = users[product.user_id].fname;
    }

    return (
      <h2>
        <nav className="prod-show-h2">
          <ul className="prod-show-user-info">
            <li className="prod-show-user-star">
              <img
                className="prod-show-user-img"
                src="https://s3.amazonaws.com/kings-2-dev/user_prof.png"
              />
              <p>{user}</p>
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
            <img className="prod-show-pictures" src={photos} />
          </figure>
        </nav>
        <section className="prod-show-middle-section">
          <figure>
            <img className="prod-show-main-pic" src={photos} />
          </figure>
          <div className="prod-show-form-wrapper">
            <form className="prod-show-form">
              <div className="prod-show-description">{description}</div>
              <div className="prod-show-price-quest">
                <p className="prod-show-price">{price}</p>
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
                <select className="custom-select-2" type="quantity">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
              <input
                className="prod-show-form-submit"
                type="submit"
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
          </div>
        </section>
      </h2>
    );
  }
}

export default withRouter(ProductShow);
