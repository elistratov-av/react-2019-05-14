import { normalizedReviews } from "../fixtures";

export default (reviewsState = normalizedReviews, action) => {
  return reviewsState.reduce((reviews, r) => {
    reviews[r.id] = r;
    return reviews;
  }, {});
};
