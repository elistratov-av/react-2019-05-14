import { normalizedReviews } from "../fixtures";
import { ADD_REVIEW, LOAD_REVIEWS, START, SUCCESS, FAIL } from "../constants";
import { fromJS } from "immutable";

const initialState = {
  loaded: false,
  loading: false,
  error: null,
  entities: []
};

export default (reviewsState = fromJS(initialState), action) => {
  switch (action.type) {
    case LOAD_REVIEWS + START: {
      return reviewsState.set("loading", true);
    }
    case LOAD_REVIEWS + SUCCESS: {
      return reviewsState
        .set("entities", fromJS(action.response))
        .set("loading", false)
        .set("loaded", true);
    }
    case LOAD_REVIEWS + FAIL: {
      return reviewsState
        .set("loading", false)
        .set("loaded", false)
        .set("error", action.error);
    }
    case ADD_REVIEW: {
      return reviewsState.get("entities").push(
        fromJS({
          id: action.generatedId,
          userId: action.userId,
          text: action.payload.text,
          rating: action.payload.rating
        })
      );
      // return [
      //   ...reviewsState,
      //   {
      //     id: action.generatedId,
      //     userId: action.userId,
      //     text: action.payload.text,
      //     rating: action.payload.rating
      //   }
      // ];
    }
    default:
      return reviewsState;
  }
};
