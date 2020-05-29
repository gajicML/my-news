import React from "react";
import "./App.scss";
import { Provider } from "react-redux";

import Homepage from "../components/pages/homepage/Homepage.component.jsx";
import Navbar from "../components/directory/navbar/Navbar.component.jsx";
import store from "../redux/store";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="navbar_wrapper">
            <Navbar />
          </div>
          <div className="page_wrapper">
            <Homepage />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
