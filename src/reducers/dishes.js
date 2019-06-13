import { arrToMap, ResourceRecord } from "./utils";
import { FAIL, LOAD_DISHES, START, SUCCESS } from "../constants";
import { Map } from "immutable";

export default (dishesState = Map({}), action) => {
  switch (action.type) {
    case LOAD_DISHES + START: {
      const id = action.payload.id;
      let state = dishesState.get(id) || new ResourceRecord();
      return dishesState.set(
        id,
        state
          .set("loading", true)
          .set("loaded", false)
          .set("error", null)
      );
    }
    case LOAD_DISHES + SUCCESS: {
      const id = action.payload.id;
      let state = dishesState.get(id) || new ResourceRecord();
      return dishesState.set(
        id,
        state
          .set("loading", false)
          .set("loaded", true)
          .set("error", null)
          .set("entities", arrToMap(action.response))
      );
    }
    case LOAD_DISHES + FAIL: {
      const id = action.payload.id;
      let state = dishesState.get(id) || new ResourceRecord();
      return dishesState.set(
        id,
        state
          .set("loading", false)
          .set("loaded", false)
          .set("error", action.error)
      );
    }
    default:
      return dishesState;
  }
};
