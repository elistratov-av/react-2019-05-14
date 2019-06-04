import uuid from "react-native-uuid";
import { ADD_REVIEW } from "../constants";

export default store => next => action => {
  console.log("before", store.getState());
  console.log("action", action);
  next(action);
  console.log("after", store.getState());
};

export const idGen = store => next => action => {
  if (action.type === ADD_REVIEW) {
    var v = uuid.v4();
    action.payload.userId = v;
    console.log("idGen:", action);
  }
  next(action);
};
