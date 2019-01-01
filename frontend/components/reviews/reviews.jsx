import React from "react";
import { withRouter } from "react-router-dom";
import merge from "lodash/merge";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";
import ReviewsItem from "./reviews_item";
import ReviewFormContainer from "./review_form_container";

class Reviews extends React.Component {
  componentDidMount() {
    this.props.receiveProductReviews(this.props.match.params.id);
  }

  reviewCount() {
    return 0 || this.props.reviews.length;
  }

  ratingAverage() {
    let sum = 0;
    this.props.reviews.forEach(review => (sum += review.rating));
    if (this.props.reviews.length) {
      return sum / this.props.reviews.length;
    } else {
      return "";
    }
  }

  render() {
    let reviews = this.props.reviews.map(review => {
      return (
        <ReviewsItem
          key={review.id}
          review={review}
          currentUser={this.props.currentUser}
          deleteReview={this.props.deleteReview}
        />
      );
    });

    return (
      <article>
        <ReviewFormContainer />
        <div>
          <section className="reviews-section">
            <div>Reviews</div>
            <div>
              <ReactStars
                color2={"black"}
                count={5}
                edit={false}
                value={this.ratingAverage() ? this.ratingAverage() : 0}
                half={true}
                size={20}
                onChange={this.selectRating}
              />
            </div>
            <div>({this.reviewCount()})</div>
          </section>
        </div>
        {reviews}
      </article>
    );
  }
}

export default withRouter(Reviews);
