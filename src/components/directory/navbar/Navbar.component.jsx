import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../../../assets/logo.png";
import NavCountrySelector from "./navCountrySelector/NavCountrySelector.component.jsx";
import "./Navbar.style.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">
        {" "}
        <div className="logo" style={{ backgroundImage: `url(${logo})` }}></div>
      </NavLink>

      <nav>
        <ul>
          <li>
            <NavLink to="/">Top News</NavLink>
          </li>
          <li>
            <NavLink to="/categories" activeClassName="selected">
              Categories
            </NavLink>
          </li>
          <li>
            <NavLink to="/search" activeClassName="selected">
              Search
            </NavLink>
          </li>
        </ul>
      </nav>
      <NavCountrySelector />
    </div>
  );
};

export default Navbar;
