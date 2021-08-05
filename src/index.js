import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import Provider from "react-redux";
import ReactDOM from "react-dom";
import "./index.css";
import 'antd/dist/antd.less';
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
