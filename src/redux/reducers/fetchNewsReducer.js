import {
  FETCH_NEWS,
  COUNTRY,
  CATEGORY,
  ADDITIONAL,
} from "../actions/typesConstants";

const initialState = {
  topArticles: [],
  activeCountry: "GB",
  dataLoading: false,
  categories: [
    "entertainment",
    "general",
    "health",
    "science",
    "sport",
    "technology",
  ],
  activeCategory: "",
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

    case FETCH_NEWS.CATEGORIES:
      return {
        ...state,
        topArticles: state.topArticles.concat(action.payload),
      };

    case CATEGORY.SET_ACTIVE:
      return {
        ...state,
        activeCategory: actions.payload,
      };

    case ADDITIONAL.REFRESH_ARTICLES:
      return {
        ...state,
        topArticles: action.payload,
      };

    default:
      return state;
  }
}
