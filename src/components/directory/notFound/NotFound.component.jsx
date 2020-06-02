import React from "react";
import { Link } from "react-router-dom";

import "./NotFound.style.scss";

const NotFound = () => (
  <div className="not-found">
    <h1>PAGE NOT FOUND</h1>
    <Link to="/">Back to HOME</Link>
  </div>
);

export default NotFound;
