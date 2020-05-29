import React, { useEffect } from "react";
import "./Homepage.style.scss";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchTopNews } from "../../../redux/actions/newsActions";
import PreviewArticle from "../../directory/preview-article/PreviewArticle.component.jsx";

const Homepage = ({ news, activeCountry, fetchTopNews }) => {
  useEffect(() => {
    fetchTopNews(activeCountry);
  }, []);

  const articles = news.map((article) => {
    return <PreviewArticle key={article.id} {...article} />;
  });

  return <div className="homepage">{articles}</div>;
};

Homepage.propTypes = {
  fetchTopNews: PropTypes.func.isRequired,
  news: PropTypes.array.isRequired,
  activeCountry: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return {
    news: state.news.topNews,
    activeCountry: state.news.activeCountry,
  };
};
export default connect(mapStateToProps, { fetchTopNews })(Homepage);
