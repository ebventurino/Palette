
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";
import registerServiceWorker from './registerServiceWorker'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render((
  <Router>
    <App />
  </Router>
  ), document.querySelector("#root"))


registerServiceWorker()