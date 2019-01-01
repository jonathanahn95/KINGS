import React from "react";
import { withRouter } from "react-router-dom";
import merge from "lodash/merge";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: "",
      body: "",
      product_id: this.props.match.params.id
    };

    this.selectRating = this.selectRating.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  selectRating(newRating) {
    this.setState({ rating: newRating });
  }

  updateBody() {
    return e => {
      this.setState({ body: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.currentUser) {
      this.props
        .createReview(this.state)
        .then(() => this.setState({ rating: "", body: "" }));
    } else {
      this.props.openModal("login");
    }
  }

  render() {
    return (
      <div className="review-form-container">
        <h2 className="write-a-review">Write a review</h2>
        <p>How much did you enjoy this product?</p>
        <form className="review-form" onSubmit={this.handleSubmit}>
          <ReactStars
            color2={"black"}
            count={5}
            edit={true}
            value={this.state.rating ? this.state.rating : 0}
            half={false}
            size={20}
            onChange={this.selectRating}
          />
          <div className="form-wrapper">
            <textarea
              value={this.state.body}
              onChange={this.updateBody()}
              className="form-body"
            />
            <input
              className="submit-review"
              type="submit"
              value="Leave Review"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(ReviewForm);
