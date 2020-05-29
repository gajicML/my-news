import React from "react";
import "./Navbar.style.scss";
import logo from "../../../assets/logo.png";
import NavCountrySelector from "./navCountrySelector/NavCountrySelector.component.jsx";
import PropTypes from "prop-types";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo" style={{ backgroundImage: `url(${logo})` }}></div>
      <nav>
        <ul>
          <li>Top News</li>
          <li>Categories</li>
          <li>Search</li>
        </ul>
      </nav>
      <NavCountrySelector />
    </div>
  );
};

export default Navbar;
