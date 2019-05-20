import React from "react";
import Review from "./review";
import { collapse } from "../decorators/collapse";
import Button from "antd/lib/button";

function ReviewList(props) {
  return (
    <div>
      <Button
        icon={props.isItemsOpen ? "caret-up" : "caret-down"}
        onClick={() => props.toggleItems()}
      >
        {props.isItemsOpen ? "Close reviews" : "Open reviews"}
      </Button>
      {props.isItemsOpen
        ? props.reviews.map(review => <Review key={review.id} {...review} />)
        : null}
    </div>
  );
}

export default collapse(ReviewList);
