import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./PreviewArticle.style.scss";
import noImg from "../../../assets/noImg.jpg";
import { Link, withRouter } from "react-router-dom";

const PreviewArticle = (props) => {
  const { title, description, urlToImage, id } = props;

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

        <Link
          to={{
            pathname: `/articles/${title
              .replace(/[^a-zA-Z ]/g, "")
              .split(" ")
              .join("_")
              .substring(0, 40)}`,
            articleId: id,
          }}
        >
          <p className="more">More ></p>
        </Link>
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

export default withRouter(PreviewArticle);
