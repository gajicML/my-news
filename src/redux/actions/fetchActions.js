import { FETCH_NEWS } from "./typesConstants";
import instance from "../../apis/newsapi.instance";

const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
import cuid from "cuid";

export const fetchTopNews = (country) => (dispatch) => {
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
      dispatch(fetchFail());
      console.error(error);
    });
};

const fetchSuccess = (data) => {
  return function (dispatch) {
    dispatch({ type: FETCH_NEWS.SUCCESS, payload: [...data] });
  };
};

const fetchFail = () => {
  return function () {
    return { type: FETCH_NEWS.FAIL, payload: true };
  };
};
