import React, { useEffect } from "react";
import "./Homepage.style.scss";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchTopNews } from "../../../redux/actions/fetchActions";
import PreviewArticle from "../../directory/preview-article/PreviewArticle.component.jsx";
import Loading from "../../directory/loading/Loading.component.jsx";

const Homepage = ({ news, activeCountry, fetchTopNews, dataLoading }) => {
  useEffect(() => {
    fetchTopNews(activeCountry);
  }, [activeCountry]);

  const country = activeCountry === "GB" ? "Great Britain" : "United States";

  const articles = news.map((article) => {
    return <PreviewArticle key={article.id} {...article} />;
  });

  const renderArticles = (
    <>
      <p className="top_country"> Top news from {country}:</p>
      <div className="homepage">{articles}</div>
    </>
  );

  return <>{dataLoading ? <Loading /> : renderArticles}</>;
};

Homepage.propTypes = {
  fetchTopNews: PropTypes.func,
  news: PropTypes.array,
  dataLoading: PropTypes.bool,
  activeCountry: PropTypes.string,
};

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    news: state.news.topArticles,
    activeCountry: state.news.activeCountry,
    dataLoading: state.news.dataLoading,
  };
};
export default connect(mapStateToProps, { fetchTopNews })(Homepage);
