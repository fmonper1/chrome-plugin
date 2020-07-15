// import App from "./App.js";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

window.onload = () => {
  ReactDOM.render(React.createElement(App), document.getElementById("app"));
  window.focus();
};
