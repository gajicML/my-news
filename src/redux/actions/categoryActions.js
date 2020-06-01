import { CATEGORY } from "./typesConstants";

export const setActiveCategory = (e) => (dispatch) => {
  dispatch({
    type: CATEGORY.SET_ACTIVE,
    payload: e.target.textContent,
  });
};
