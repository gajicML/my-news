import React, { useEffect } from "react";
import "./Categories.style.scss";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Category from "../category/Category.component.jsx";
import { fetchCategories } from "../../../redux/actions/fetchActions";
import { refreshArticles } from "../../../redux/actions/otherActions";
import Accordion from "../../directory/accordion/Accordion.component.jsx";

import { Route, Link, withRouter } from "react-router-dom";

const Categories = ({
  news,
  activeCountry,
  fetchCategories,
  refreshArticles,
  categories,
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

  return (
    <>
      <h1 className="title">{`Top 5 news by category from ${activeCountry}`}</h1>
      {renderCategories};
    </>
  );
};
Categories.propTypes = {
  fetchCategories: PropTypes.func,
};

const mapStateToProps = (state) => {
  // console.log("categories state", state);
  return {
    news: state.news.topArticles,
    activeCountry: state.news.activeCountry,
    categoryNews: state.news.categoryNews,
    categories: state.news.categories,
  };
};

export default connect(mapStateToProps, { fetchCategories, refreshArticles })(
  withRouter(Categories)
);
