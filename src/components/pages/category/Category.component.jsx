import React from "react";
import "./Category.style.scss";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";

const Category = (props) => {
  console.log("category", props);

  return <div className="category">CATEGORY</div>;
};

export default withRouter(Category);
