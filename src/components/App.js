import React from "react";
import "./App.scss";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";

import Homepage from "../components/pages/homepage/Homepage.component.jsx";
import Categories from "../components/pages/categories/Categories.component.jsx";
import Category from "../components/pages/category/Category.component.jsx";
import Article from "../components/pages/article/Article.component.jsx";
import Search from "../components/pages/search/Search.component.jsx";
import Navbar from "../components/directory/navbar/Navbar.component.jsx";
import NotFound from "../components/directory/notFound/NotFound.component.jsx";
import ErrorBoundary from "../components/directory/errorBoundary/ErrorBoundary.component.jsx";

const App = ({ error, errorMessage }) => {
  if (error) return <ErrorBoundary message={errorMessage} />;
  return (
    <div className="App">
      <div className="navbar_wrapper">
        <Navbar />
      </div>

      <div className="page_wrapper">
        <Switch>
          <Route exact path="/" component={Homepage} />

          <Route exact path="/categories" component={Categories} />

          <Route path="/categories/:id" component={Category} />

          <Route path="/articles/:id" component={Article} />

          <Route path="/search" component={Search} />

          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    error: state.news.error,
    errorMessage: state.news.errorMessage,
  };
};

export default connect(mapStateToProps, {})(App);
