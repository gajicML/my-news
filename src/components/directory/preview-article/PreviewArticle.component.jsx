import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./PreviewArticle.style.scss";
import noImg from "../../../assets/noImg.jpg";

const PreviewArticle = (props) => {
  const { title, description, urlToImage, content } = props;
  // console.log(props);
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
  title: PropTypes.string,
  description: PropTypes.string,
  urlToImage: PropTypes.string,
  content: PropTypes.string,
};

export default PreviewArticle;
