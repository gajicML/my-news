import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchTopNews } from "../../../redux/actions/newsActions";

class News extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchTopNews(this.props.activeCountry);
  }

  render() {
    const articles = this.props.news.map((article) => {
      return (
        <div key={article.publishedAt}>
          <h3>{article.title}</h3>
          <p>{article.description}</p>
        </div>
      );
    });
    return <div>{articles}</div>;
  }
}

News.propTypes = {
  fetchTopNews: PropTypes.func.isRequired,
  news: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    news: state.news.topNews,
    activeCountry: state.news.activeCountry,
  };
};
export default connect(mapStateToProps, { fetchTopNews })(News);
