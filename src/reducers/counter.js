import { INCREMENT, DECREMENT } from "../constants";

export default (count = 10, action) => {
  console.log("counter reducer");
  switch (action.type) {
    case INCREMENT:
      return count + 1;
    case DECREMENT:
      return count - 1;
    default:
      return count;
  }
};
