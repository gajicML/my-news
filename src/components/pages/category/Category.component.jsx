import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./Category.style.scss";
import PropTypes from "prop-types";
import { fetchCategory } from "../../../redux/actions/fetchActions";
import PreviewArticle from "../../directory/preview-article/PreviewArticle.component";

const Category = ({
  activeCountry,
  fetchCategory,
  topCategoryArticles,
  ...rest
}) => {
  const category = rest.match.params.id;
  console.log(rest);

  useEffect(() => {
    fetchCategory(category, activeCountry);
  }, [activeCountry]);

  const country = activeCountry === "GB" ? "Great Britain" : "United States";

  const articles = topCategoryArticles.map((article) => {
    return <PreviewArticle key={article.id} {...article} />;
  });

  const renderArticles = (
    <>
      <p className="goBack" onClick={() => rest.history.goBack()}>
        {"< "}
        GO BACK TO CATEGORIES
      </p>
      <p className="top_country">
        {" "}
        Top {category} news from {country}:
      </p>
      <div className="category">{articles}</div>
    </>
  );
  return renderArticles;
};

Category.propTypes = {
  dataLoading: PropTypes.bool,
  news: PropTypes.array,
  activeCountry: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    topCategoryArticles: state.news.topCategoryArticles,
    activeCountry: state.news.activeCountry,
    dataLoading: state.news.dataLoading,
  };
};

export default connect(mapStateToProps, { fetchCategory })(
  withRouter(Category)
);
