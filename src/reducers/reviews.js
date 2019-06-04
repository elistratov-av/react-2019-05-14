import { normalizedReviews } from "../fixtures";

const reviews = normalizedReviews.reduce((reviews, r) => {
  reviews[r.id] = r;
  return reviews;
}, {});

export default (reviewsState = reviews, action) => {
  return reviewsState;
};
