import React from "react";
import "./App.scss";
import { Provider } from "react-redux";

import News from "../components/pages/news/News.component.jsx";
import store from "../redux/store";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <News />
        </div>
      </Provider>
    );
  }
}

export default App;
