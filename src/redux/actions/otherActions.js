import { ADDITIONAL } from "./typesConstants";

export const refreshArticles = () => (dispatch) => {
  dispatch({
    type: ADDITIONAL.REFRESH_ARTICLES,
    payload: [],
  });
};
