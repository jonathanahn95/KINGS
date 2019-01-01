import React from "react";
import { withRouter } from "react-router-dom";
import merge from "lodash/merge";
import { Link } from "react-router-dom";

class SearchFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="filter-section">
        <div className="on-sale-wrapper">
          <h1 className="filter-h1">Special offers</h1>
          <div className="on-sale">
            <input
              name="answer0"
              type="checkbox"
              value="true"
              className="input"
            />
            <p>On sale</p>
          </div>
        </div>
        <div className="single-section-wrapper">
          <h2 className="filter-h2">Shipping</h2>
          <ul className="section-ul">
            <div className="input-wrapper">
              <input
                name="answer"
                type="checkbox"
                value="true"
                checked="checked"
                className="input"
              />
              <p>Free Shipping</p>
            </div>
            <div className="input-wrapper">
              <input
                className="input"
                name="answer"
                type="checkbox"
                value="true"
              />
              <p>Ready to ship in 1 business day</p>
            </div>
            <div className="input-wrapper">
              <input
                className="input"
                name="answer"
                type="checkbox"
                value="true"
              />
              <p>Ready to ship within 3 business days</p>
            </div>
          </ul>
        </div>
        <div className="single-section-wrapper">
          <h2 className="filter-h2">Shop location</h2>
          <ul className="section-ul">
            <div className="input-wrapper">
              <input
                className="input"
                name="answer"
                type="radio"
                value="true"
                checked="checked"
              />
              <p>Anywhere</p>
            </div>
            <div className="input-wrapper">
              <input
                className="input"
                name="answer"
                type="radio"
                value="true"
              />
              <p>United States</p>
              s
            </div>
            <div className="input-wrapper">
              <input
                className="input"
                name="answer"
                type="radio"
                value="true"
              />
              <p>Custom</p>
            </div>
          </ul>
        </div>
        <div className="single-section-wrapper">
          <h2 className="filter-h2">Item type</h2>
          <ul className="section-ul">
            <div className="input-wrapper">
              <input
                className="input"
                name="answer2"
                type="radio"
                value="true"
                checked="checked"
              />
              <p>All items</p>
            </div>
            <div className="input-wrapper">
              <input
                className="input"
                name="answer2"
                type="radio"
                value="true"
              />
              <p>Handmande</p>
            </div>
            <div className="input-wrapper">
              <input
                className="input"
                name="answer2"
                type="radio"
                value="true"
              />
              <p>Vintage</p>
            </div>
          </ul>
        </div>
        <div className="single-section-wrapper">
          <h2 className="filter-h2">Price</h2>
          <ul className="section-ul">
            <div className="input-wrapper">
              <input
                className="input"
                name="answer3"
                type="radio"
                value="true"
                checked="checked"
              />
              <p>Any price</p>
            </div>
            <div className="input-wrapper">
              <input
                className="input"
                name="answer3"
                type="radio"
                value="true"
              />
              <p>Under $25</p>
            </div>
            <div className="input-wrapper">
              <input
                className="input"
                name="answer3"
                type="radio"
                value="true"
              />
              <p>$25 to $50</p>
            </div>
            <div className="input-wrapper">
              <input
                className="input"
                name="answer3"
                type="radio"
                value="true"
              />
              <p>$50 to $100</p>
            </div>
            <div className="input-wrapper">
              <input
                className="input"
                name="answer3"
                type="radio"
                value="true"
              />
              <p>Over $100</p>
            </div>
            <div className="input-wrapper">
              <input
                className="input"
                name="answer3"
                type="radio"
                value="true"
              />
              <p>Custom</p>
            </div>
          </ul>
        </div>
      </section>
    );
  }
}

export default withRouter(SearchFilter);
