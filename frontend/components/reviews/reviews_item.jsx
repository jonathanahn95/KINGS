import React from "react";
import { withRouter } from "react-router-dom";
import merge from "lodash/merge";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";

class ReviewsItem extends React.Component {
  parseTime(rdate) {
    let date = new Date(rdate);
    let day = date.getDate();
    let year = date.getFullYear();
    let monthNum = date.getMonth();
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec"
    ];
    let monthStr = months[monthNum];
    let fulldate = "";
    fulldate += monthStr + " " + day + ", " + year;

    return fulldate;
  }

  render() {
    const { review } = this.props;
    const { user_id, id, rating, created_at, body } = review;
    let removeButton = null;
    if (this.props.currentUser && this.props.currentUser.id === user_id) {
      removeButton = (
        <button
          onClick={() => this.props.deleteReview(id)}
          className="delete-review"
        >
          Delete Review
        </button>
      );
    }
    return (
      <li className="review">
        <div className="reviewer-info">
          <i className="far fa-user" />
          <p>Reviewed by</p>
          <Link className="link" to={`/users`}>
            <p>Guest Name</p>
          </Link>
        </div>
        <div className="review-info">
          <div className="rating-date">
            <ReactStars
              color2={"#ffaa00"}
              count={5}
              edit={false}
              value={rating}
              half={true}
              size={20}
              onChange={this.selectRating}
            />
            <p>{this.parseTime(created_at)}</p>
          </div>

          <div className="review-body">
            <p className="review-body-p">{body}</p>
          </div>
          {removeButton}
        </div>
      </li>
    );
  }
}

export default withRouter(ReviewsItem);
