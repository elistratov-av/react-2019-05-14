import { createStore, applyMiddleware } from "redux";
import reducer from "../reducers";
import logger, { idGen } from "../middlewares";
import { composeWithDevTools } from "redux-devtools-extension";

const enhancer = composeWithDevTools(applyMiddleware(logger, idGen));

const store = createStore(reducer, enhancer);

// dev mode
window.store = store;

export default store;
