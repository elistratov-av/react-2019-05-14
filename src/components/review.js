import React from "react";

function Review(props) {
  return (
    <div>
      <div>{props.text}</div>
      <strong>{props.user}</strong>
    </div>
  );
}

export default Review;
