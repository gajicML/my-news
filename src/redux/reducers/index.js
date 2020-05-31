import { combineReducers } from "redux";
import fetchNewsReducer from "./fetchNewsReducer";

export default combineReducers({
  news: fetchNewsReducer,
});
