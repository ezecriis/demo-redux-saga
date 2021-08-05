import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import Provider from "react-redux";
import ReactDOM from "react-dom";
import "./index.css";
import 'antd/dist/antd.less';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
