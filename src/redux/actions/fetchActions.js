import { FETCH_NEWS } from "./typesConstants";
import instance from "../../apis/newsapi.instance";
import refreshArticles from "./otherActions";

const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
import cuid from "cuid";

export const fetchtopArticles = (country) => (dispatch) => {
  dispatch({ type: FETCH_NEWS.LOAD });

  instance
    .get(`top-headlines/?country=${country}&apiKey=${API_KEY}`)

    .then((data) => {
      let articles = data["data"]["articles"].map((article) => {
        return {
          ...article,
          id: cuid(),
        };
      });
      dispatch(fetchSuccess(articles));
    })

    .catch((error) => {
      dispatch(fetchFail(error.message));
      console.error(error);
    });
};

const fetchSuccess = (data) => {
  return function (dispatch) {
    dispatch({ type: FETCH_NEWS.SUCCESS, payload: [...data] });
  };
};

const fetchFail = (errorMessage) => {
  return function (dispatch) {
    dispatch({ type: FETCH_NEWS.FAIL, payload: errorMessage });
  };
};

export const fetchCategories = (categories, country) => (dispatch) => {
  categories.forEach((category) => {
    dispatch({ type: FETCH_NEWS.LOAD });

    instance
      .get(
        `top-headlines/?country=${country}&category=${category}&apiKey=${API_KEY}`
      )
      .then((data) => {
        const articles = data["data"]["articles"].map((article) => {
          return {
            ...article,
            id: cuid(),
            category: category,
          };
        });

        dispatch(fetchSuccessCategories(articles));
      })
      .catch((error) => {
        dispatch(fetchFail(error.message));
        console.error(error);
      });
  });
};

const fetchSuccessCategories = (item) => ({
  type: FETCH_NEWS.CATEGORIES,
  payload: [...item],
});

export const fetchCategory = (category, country) => (dispatch) => {
  dispatch({ type: FETCH_NEWS.LOAD });

  instance
    .get(
      `top-headlines/?country=${country}&category=${category}&apiKey=${API_KEY}`
    )

    .then((data) => {
      const articles = data["data"]["articles"].map((article) => {
        return {
          ...article,
          id: cuid(),
        };
      });
      dispatch({ type: FETCH_NEWS.CATEGORY, payload: articles });
    })

    .catch((error) => {
      dispatch(fetchFail(error.message));
      console.error(error);
    });
};

export const fetchSearched = (searchTerm) => (dispatch) => {
  dispatch({ type: FETCH_NEWS.LOAD });

  if (!searchTerm)
    return dispatch({
      type: FETCH_NEWS.SEARCH,
      payload: { articles: [], searchTerm: "" },
    });

  instance
    .get(`everything/?q=${searchTerm}&sortBy=popularity&apiKey=${API_KEY}`)

    .then((data) => {
      const articles = data["data"]["articles"].map((article) => {
        return {
          ...article,
          id: cuid(),
        };
      });
      dispatch({
        type: FETCH_NEWS.SEARCH,
        payload: { articles: [...articles], searchTerm: searchTerm },
      });
    })

    .catch((error) => {
      dispatch(fetchFail(error.message));
      console.error(error);
    });
};
