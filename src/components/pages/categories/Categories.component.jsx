import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./Categories.style.scss";
import PropTypes from "prop-types";

import { fetchCategories } from "../../../redux/actions/fetchActions";
import { refreshArticles } from "../../../redux/actions/otherActions";
import Accordion from "../../directory/accordion/Accordion.component.jsx";
import Loading from "../../directory/loading/Loading.component.jsx";

const Categories = ({
  news,
  activeCountry,
  fetchCategories,
  refreshArticles,
  categories,
  dataLoading,
}) => {
  useEffect(() => {
    fetchCategories(categories, activeCountry);
    refreshArticles();
  }, [activeCountry]);

  const renderCategories = categories.map((category, index) => {
    let articleBlock = [];
    news.forEach((articles) => {
      if (articles.category === category) articleBlock.push(articles);
    });
    return (
      <div key={index} className="categories">
        <Accordion
          key={index}
          categoryNews={articleBlock}
          category={category}
        />
      </div>
    );
  });

  const renderComponent = dataLoading ? (
    <Loading />
  ) : (
    <>
      <h1 className="categories-title">{`Top 5 news by category from ${activeCountry}`}</h1>
      {renderCategories};
    </>
  );

  return renderComponent;
};

Categories.propTypes = {
  dataLoading: PropTypes.bool,
  fetchCategories: PropTypes.func,
  news: PropTypes.array,
  activeCountry: PropTypes.string,
  refreshArticles: PropTypes.func,
  categories: PropTypes.array,
};

const mapStateToProps = (state) => {
  // console.log("categories state", state);
  return {
    news: state.news.topArticles,
    activeCountry: state.news.activeCountry,
    categoryNews: state.news.categoryNews,
    categories: state.news.categories,
    dataLoading: state.news.dataLoading,
    error: state.news.error,
  };
};

export default connect(mapStateToProps, { fetchCategories, refreshArticles })(
  withRouter(Categories)
);
