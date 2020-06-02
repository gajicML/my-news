import React from "react";
import "./Search.style.scss";
import PropTypes from "prop-types";
import PreviewArticle from "../../directory/preview-article/PreviewArticle.component.jsx";

const SearchResult = ({ searchedArticles, searchTerm }) => {
  const articles = searchedArticles.map((article) => {
    return <PreviewArticle key={article.id} {...article} />;
  });

  const renderArticles = (
    <>
      {articles.length === 0 && searchTerm.length > 0 ? (
        "NO RESULT"
      ) : (
        <>
          {" "}
          <div className="search_result"> {articles}</div>
        </>
      )}
    </>
  );
  return renderArticles;
};

SearchResult.propTypes = {
  searchedArticles: PropTypes.array,
};

export default SearchResult;
