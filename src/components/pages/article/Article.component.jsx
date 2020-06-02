import React, { useEffect } from "react";
import "./Article.style.scss";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import noImg from "../../../assets/noImg.jpg";
import ErrorBoundary from "../../directory/errorBoundary/ErrorBoundary.component.jsx";
import { toggleButtons } from "../../../redux/actions/otherActions";

import PropTypes from "prop-types";

const Article = ({ articles, toggleButtons, ...rest }) => {
  useEffect(() => {
    toggleButtons(false);
  }, []);

  useEffect(() => {
    return () => {
      toggleButtons(true);
      console.log("cleaned up");
    };
  }, []);

  const id = rest.location.articleId;

  let matchedArticle = articles.filter((article) => article.id === id)[0];

  const checkAvailability = (arg, desc) =>
    arg ? arg : `${desc} not available`;

  if (!matchedArticle) return <ErrorBoundary />;

  return (
    <div className="article">
      <h1>{checkAvailability(matchedArticle.title, "Title")}</h1>
      <p className="description">
        {checkAvailability(matchedArticle.description, "Description")}
      </p>

      <img
        src={matchedArticle.urlToImage ? matchedArticle.urlToImage : noImg}
      />

      <p className="author">
        {checkAvailability(matchedArticle.author, "Author")}
      </p>
      <p className="content">
        {checkAvailability(matchedArticle.content, "Content")}
      </p>
      <p className="goBack" onClick={() => rest.history.goBack()}>
        {"< "}
        GO BACK
      </p>
    </div>
  );
};

Article.propTypes = {
  articles: PropTypes.array,
  rest: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    articles: state.news.topArticles || state.news.topCategoryArticles,
    error: state.news.error,
    toggleButtons: state.news.toggleButtons,
  };
};

export default connect(mapStateToProps, { toggleButtons })(withRouter(Article));
