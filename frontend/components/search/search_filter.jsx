import React from "react";
import { withRouter } from "react-router-dom";
import merge from "lodash/merge";
import { Link } from "react-router-dom";

class SearchFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "On sale": [],
      "Shop location": [],
      Price: [],
      Shipping: [],
      "Item style": [],
      category_id: this.props.match.params.id
    };
    this.createOptions = this.createOptions.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.setState({
        "On sale": [],
        "Shop location": [],
        Price: [],
        Shipping: [],
        "Item style": [],
        category_id: this.props.match.params.id
      });
    } else if (this.state !== prevState) {
      this.props.requestSearchResults(this.generateQuery(this.state));
    }
  }

  generateQuery(nextState) {
    const queries = Object.keys(nextState);
    let queryString = "";
    queries.forEach(element => {
      let querySplit = element.split(" ");
      let query = querySplit[querySplit.length - 1];
      queryString += `${query}=(${nextState[element]})&`;
    });
    return queryString;
  }

  addToArray(field) {
    return e => {
      const val = e.target.value;
      let newArr = this.state[field];

      if (field === "Shipping") {
        if (newArr.includes(val)) {
          newArr = newArr.filter(ele => ele !== val);
        } else {
          newArr.push(val);
        }
      } else {
        if (newArr.includes(val)) {
          newArr = [];
        } else {
          newArr = [];
          newArr.push(val);
        }
      }
      this.setState({
        [field]: newArr
      });
    };
  }

  createOptions(type) {
    switch (type) {
      case "Shipping":
        return [
          [
            "Free Shipping",
            "Ready to ship in 1 business day",
            "Ready to ship within 3 business days"
          ],
          ["checkbox"],
          [0, 1, 2]
        ];
      case "Shop location":
        return [["Anywhere", "United States", "Custom"], ["radio"], [0, 1, 2]];
      case "Item style":
        return [["All items", "Handmade", "Vintage"], ["radio"], [0, 1, 2]];
      case "Price":
        return [
          [
            "Any price",
            "Under $25",
            "$25 to $50",
            "$50 to $100",
            "Over $100",
            "Custom"
          ],
          ["radio"],
          [0, 1, 2, 3, 4, 5]
        ];
      default:
        return [];
    }
  }

  createToggle(type, idx) {
    let checked = "";
    if (this.state[type].includes(idx.toString())) {
      checked = "checked";
    }
    return checked;
  }

  createSection(type) {
    const typeOptions = this.createOptions(type);

    return (
      <div className="single-section-wrapper">
        <h2 className="filter-h2">{type}</h2>
        <ul className="section-ul">
          {typeOptions[2].map((val, idx) => {
            return (
              <div key={idx} className="input-wrapper">
                <input
                  onClick={this.addToArray(type)}
                  name={type}
                  type={`${typeOptions[1]}`}
                  value={idx}
                  className="input"
                  checked={this.createToggle(type, idx)}
                />
                <p>{typeOptions[0][idx]}</p>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }

  render() {
    const shippingOptions = this.createSection("Shipping");
    const shopLocations = this.createSection("Shop location");
    const itemTypes = this.createSection("Item style");
    const priceOptions = this.createSection("Price");

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
        {shippingOptions}
        {shopLocations}
        {itemTypes}
        {priceOptions}
      </section>
    );
  }
}

export default withRouter(SearchFilter);
