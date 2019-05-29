import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { Provider } from "react-redux";
import { store, IsChecked } from "./store.js";
import { Component } from "./components/component";

ReactDOM.render(
  <Provider store={store}>
    <Component />
  </Provider>,
  document.getElementById("root")
);
