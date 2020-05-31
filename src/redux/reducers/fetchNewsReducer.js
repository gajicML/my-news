import { FETCH_NEWS, COUNTRY } from "../actions/typesConstants";

const initialState = {
  topArticles: [],
  activeCountry: "GB",
  dataLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_NEWS.LOAD:
      return { ...state, dataLoading: true };

    case FETCH_NEWS.SUCCESS:
      return { ...state, topArticles: action.payload, dataLoading: false };

    case FETCH_NEWS.FAIL:
      return { ...state, error: action.payload };

    case COUNTRY.SELECT:
      return { ...state, activeCountry: action.payload.country };

    default:
      return state;
  }
}

import {} from "../actions/typesConstants";
