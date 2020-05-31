import React from "react";
import "./App.scss";
import { Provider } from "react-redux";
import { Switch, Route } from "react-router-dom";
import store from "../redux/store";

import Homepage from "../components/pages/homepage/Homepage.component.jsx";
import Categories from "../components/pages/categories/Categories.component.jsx";
import Search from "../components/pages/search/Search.component.jsx";
import Navbar from "../components/directory/navbar/Navbar.component.jsx";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="navbar_wrapper">
            <Navbar />
          </div>

          <div className="page_wrapper">
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route path="/categories" component={Categories} />
              <Route path="/search" component={Search} />
            </Switch>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
