import React, { PureComponent } from "react";
import RestaurantMenu from "./restaurant-menu";
import ReviewList from "./review-list";
import { Rate } from "antd";

function roundHalf(v) {
  const rest = v % 1;
  return rest >= 0.5 ? (v ^ 0) + 0.5 : v ^ 0;
}

class Restaurant extends PureComponent {
  state = {
    isReviewsOpen: true
  };

  render() {
    const { image, name, menu, isMenuOpen, reviews } = this.props;
    const { isReviewsOpen } = this.state;
    var avgRating = reviews.length
      ? (reviews.reduce((p, c) => p + c.rating, 0) / reviews.length).toFixed(1)
      : 0;

    return (
      <div>
        <img src={image} width={64} height={64} alt={name} />
        <h3>
          {name} <Rate disabled allowHalf defaultValue={roundHalf(avgRating)} />{" "}
          {avgRating}
        </h3>
        <button onClick={this.handleToggleOpenClick}>
          {isMenuOpen ? "Close menu" : "Open menu"}
        </button>
        {isMenuOpen ? <RestaurantMenu menu={menu} /> : null}
        <hr />
        <button onClick={this.handleToggleReviewsClick}>
          {isReviewsOpen ? "Close review list" : "Open review list"}
        </button>
        {isReviewsOpen ? <ReviewList reviews={reviews} /> : null}
      </div>
    );
  }

  handleToggleOpenClick = () => {
    this.props.toggleOpenMenu(this.props.id);
  };

  handleToggleReviewsClick = () => {
    this.setState({
      isReviewsOpen: !this.state.isReviewsOpen
    });
  };
}

export default Restaurant;
