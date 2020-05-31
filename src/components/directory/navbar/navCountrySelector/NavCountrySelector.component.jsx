import React from "react";
import { connect } from "react-redux";
import { selectCountry } from "../../../../redux/actions/countryActions";

import PropTypes from "prop-types";

import "./NavCountrySelector.style.scss";

const NavCountrySelector = ({ activeCountry, selectCountry }) => {
  return (
    <div className="navCountrySelector">
      <div
        className={`country ${activeCountry === "GB" ? "active" : ""}`}
        onClick={() => selectCountry("GB")}
      >
        GB
      </div>
      <div
        className={`country ${activeCountry === "US" ? "active" : ""}`}
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
  // console.log("state", state.news.activeCountry);
  return {
    activeCountry: state.news.activeCountry,
  };
};

export default connect(mapStateToProps, { selectCountry })(NavCountrySelector);
