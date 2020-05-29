import { FETCH_TOP_NEWS } from "../actions/types";

const initialState = {
  topNews: [],
  activeCountry: "US",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_TOP_NEWS:
      console.log("state", state);
      return { ...state, topNews: action.payload };
    default:
      return state;
  }
}
