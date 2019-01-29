import React from "react";
import HeaderContainer from "../header/header_container";

class ItemFormHtml extends React.Component {
  render() {
    return (
      <ul className="details-list-2">
        <li>
          <label className="item-form-location">Location:</label>
          <div className="input-container">
            <div className="form-html-div">
              United States
              <input
                type="radio"
                name="location"
                value={1}
                onClick={this.props.updateField("location")}
              />
            </div>
            <div className="form-html-div">
              China
              <input
                type="radio"
                name="location"
                value={2}
                onClick={this.props.updateField("location")}
              />
            </div>
            <div className="form-html-div">
              Other
              <input
                type="radio"
                name="location"
                value={0}
                onClick={this.props.updateField("location")}
              />
            </div>
          </div>
        </li>
        <li>
          <label className="item-form-shipping">Shipping:</label>
          <div className="form-html-div">
            Free
            <input
              type="radio"
              name="shipping"
              value={0}
              onClick={this.props.updateField("shipping")}
            />
          </div>
          <div className="form-html-div">
            Ready to ship in 1 business day
            <input
              type="radio"
              name="shipping"
              value={1}
              onClick={this.props.updateField("shipping")}
            />
          </div>
          <div className="form-html-div">
            Ready to ship within 3 business days
            <input
              type="radio"
              name="shipping"
              value={2}
              onClick={this.props.updateField("shipping")}
            />
          </div>
        </li>
        <li>
          <label className="item-form-style">Style:</label>
          <div className="form-html-div">
            Handmade
            <input
              type="radio"
              name="style"
              value={1}
              onClick={this.props.updateField("style")}
            />
          </div>
          <div className="form-html-div">
            Vintage
            <input
              type="radio"
              name="style"
              value={2}
              onClick={this.props.updateField("style")}
            />
          </div>
        </li>
      </ul>
    );
  }
}

export default ItemFormHtml;
