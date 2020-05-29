import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import newsReducer from "./reducers";

const initState = {};

const middleware = [thunk];

const store = createStore(
  newsReducer,
  initState,
  compose(applyMiddleware(...middleware))
);

export default store;
