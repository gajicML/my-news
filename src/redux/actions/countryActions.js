import { COUNTRY } from "./typesConstants";

export const selectCountry = (country) => {
  return function (dispatch) {
    dispatch({
      type: COUNTRY.SELECT,
      payload: { country },
    });
  };
};
