import { FETCH_TOP_NEWS } from "./types";
import instance from "../../apis/newsapi.instance";

export const fetchTopNews = (country) => (dispatch) => {
  instance
    .get(
      `top-headlines/?country=${country}&apiKey=037a0121ca034960b16643d275fd7631`
    )
    .then((data) =>
      dispatch({ type: FETCH_TOP_NEWS, payload: data["data"]["articles"] })
    );
};
