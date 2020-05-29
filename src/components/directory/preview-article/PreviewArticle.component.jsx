import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./PreviewArticle.style.scss";
import noImg from "../../../assets/noImg.jpg";

const PreviewArticle = ({ title, description, urlToImage, content }) => {
  const bg = urlToImage ? urlToImage : noImg;
  const myStyle = {
    backgroundImage: `url(${bg})`,
  };

  return (
    <div className="preview">
      <div className="content">
        <div className="background-image" style={myStyle}></div>
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>

        <p className="more">More ></p>
      </div>
    </div>
  );
};

PreviewArticle.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  urlToImage: PropTypes.string.isRequired,
  // content: PropTypes.string.isRequired,
};

export default PreviewArticle;
