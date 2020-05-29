import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import newsReducer from "./reducers";

const initState = {};

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  newsReducer,
  initState,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
