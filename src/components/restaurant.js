import React, { PureComponent } from "react";
import RestaurantMenu from "./restaurant-menu";
import ReviewList from "./review-list";
import { Rate } from "antd";
import Button from "antd/lib/button";

function roundHalf(v) {
  const rest = v % 1;
  return rest >= 0.5 ? (v ^ 0) + 0.5 : v ^ 0;
}

class Restaurant extends PureComponent {
  render() {
    const { image, name, menu, isMenuOpen, reviews } = this.props;

    const avgRating = reviews.length
      ? (reviews.reduce((p, c) => p + c.rating, 0) / reviews.length).toFixed(1)
      : 0;

    return (
      <div>
        <img src={image} width={64} height={64} alt={name} />
        <h3>
          {name} <Rate disabled allowHalf value={roundHalf(avgRating)} />{" "}
          {avgRating}
        </h3>
        <Button onClick={this.handleToggleOpenClick}>
          {isMenuOpen ? "Close menu" : "Open menu"}
        </Button>
        {isMenuOpen ? <RestaurantMenu menu={menu} /> : null}
        <ReviewList reviews={reviews} />
      </div>
    );
  }

  handleToggleOpenClick = () => {
    this.props.toggleOpenMenu(this.props.id);
  };
}

export default Restaurant;
