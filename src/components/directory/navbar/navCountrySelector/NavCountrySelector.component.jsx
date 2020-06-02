import React from "react";
import { connect } from "react-redux";
import { selectCountry } from "../../../../redux/actions/countryActions";

import PropTypes from "prop-types";

import "./NavCountrySelector.style.scss";

const NavCountrySelector = ({
  activeCountry,
  selectCountry,
  buttonsActive,
}) => {
  const disabledClass = !buttonsActive ? "disabled" : "";

  return (
    <div className="navCountrySelector">
      <div
        className={`country  ${
          activeCountry === "GB" ? "active" : ""
        } ${disabledClass}`}
        onClick={() => selectCountry("GB")}
      >
        GB
      </div>
      <div
        className={`country  ${
          activeCountry === "US" ? "active" : ""
        } ${disabledClass}`}
        onClick={() => selectCountry("US")}
      >
        US
      </div>
    </div>
  );
};

NavCountrySelector.propTypes = {
  activeCountry: PropTypes.string,
  selectCountry: PropTypes.func,
};

const mapStateToProps = (state) => {
  console.log("state in NAV COUNTRY SELECTOR", state.news.buttonsActive);
  return {
    activeCountry: state.news.activeCountry,
    buttonsActive: state.news.buttonsActive,
  };
};

export default connect(mapStateToProps, { selectCountry })(NavCountrySelector);
