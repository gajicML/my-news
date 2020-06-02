import { ADDITIONAL } from "./typesConstants";

export const refreshArticles = () => (dispatch) => {
  dispatch({
    type: ADDITIONAL.REFRESH_ARTICLES,
    payload: [],
  });
};

export const toggleButtons = (active) => (dispatch) => {
  dispatch({
    type: ADDITIONAL.TOGGLE_BUTTONS,
    payload: active,
  });
};
