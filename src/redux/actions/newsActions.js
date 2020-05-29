import { FETCH_TOP_NEWS } from "./types";
import instance from "../../apis/newsapi.instance";

const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
console.log(API_KEY);
const ID = () => "_" + Math.random().toString(36).substr(2, 9);

export const fetchTopNews = (country) => (dispatch) => {
  instance
    .get(`top-headlines/?country=${country}&apiKey=${API_KEY}`)
    .then((data) => {
      let articles = data["data"]["articles"].map((article) => {
        return {
          ...article,
          id: ID(),
        };
      });
      dispatch({ type: FETCH_TOP_NEWS, payload: articles });
    });
};
