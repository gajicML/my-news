import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./Search.style.scss";
import _, { debounce } from "lodash";
import PropTypes from "prop-types";
import { fetchSearched } from "../../../redux/actions/fetchActions";
import { refreshArticles } from "../../../redux/actions/otherActions";
import SearchResult from "./SearchResult.component.jsx";
import Loading from "../../directory/loading/Loading.component.jsx";

const Search = ({
  fetchSearched,
  dataLoading,
  searchedArticles,
  refreshArticles,
  activeCountry,
  searchTerm,
}) => {
  useEffect(() => {
    refreshArticles();
  }, [activeCountry]);

  const onChange = (event) => {
    /* signal to React not to nullify the event object */
    event.persist();

    const debouncedFn = _.debounce(() => {
      let searchString = event.target.value;

      fetchSearched(searchString);
    }, 300);

    debouncedFn();
  };

  const renderSearchResult = dataLoading ? (
    <Loading />
  ) : (
    <SearchResult searchedArticles={searchedArticles} searchTerm={searchTerm} />
  );

  return (
    <>
      <div className="search-input">
        <input name="search-input" onChange={onChange} placeholder="Search " />
      </div>

      {renderSearchResult}
    </>
  );
};

Search.propTypes = {
  dataLoading: PropTypes.bool,
  searchedArticles: PropTypes.array,
  fetchSearched: PropTypes.func,
  refreshArticles: PropTypes.func,
  activeCountry: PropTypes.string,
  searchTerm: PropTypes.string,
};

const mapStateToProps = (state) => {
  // console.log(state.news.searchTerm);
  return {
    searchedArticles: state.news.topArticles,
    dataLoading: state.news.dataLoading,
    activeCountry: state.news.activeCountry,
    searchTerm: state.news.searchTerm,
  };
};

export default connect(mapStateToProps, { fetchSearched, refreshArticles })(
  Search
);
