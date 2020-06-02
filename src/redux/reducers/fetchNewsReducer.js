import {
  FETCH_NEWS,
  COUNTRY,
  CATEGORY,
  ADDITIONAL,
} from "../actions/typesConstants";

const initialState = {
  topArticles: [],
  topCategoryArticles: [],
  activeCountry: "GB",
  dataLoading: false,
  buttonsActive: true,
  activeCategory: "",
  error: false,
  errorMessage: "",
  categories: [
    "entertainment",
    "general",
    "health",
    "science",
    "sport",
    "technology",
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_NEWS.LOAD:
      return { ...state, dataLoading: true };

    case FETCH_NEWS.SUCCESS:
      return { ...state, topArticles: action.payload, dataLoading: false };

    case FETCH_NEWS.FAIL:
      return { ...state, errorMessage: action.payload, error: true };

    case COUNTRY.SELECT:
      return { ...state, activeCountry: action.payload.country };

    case FETCH_NEWS.CATEGORIES:
      return {
        ...state,
        topArticles: state.topArticles.concat(action.payload),
        dataLoading: false,
      };

    case FETCH_NEWS.CATEGORY:
      return {
        ...state,
        topCategoryArticles: action.payload,
        dataLoading: false,
      };

    case CATEGORY.SET_ACTIVE:
      return {
        ...state,
        activeCategory: action.payload,
      };

    case ADDITIONAL.REFRESH_ARTICLES:
      return {
        ...state,
        topArticles: action.payload,
      };

    case ADDITIONAL.TOGGLE_BUTTONS:
      return {
        ...state,
        buttonsActive: action.payload,
      };

    default:
      return state;
  }
}
