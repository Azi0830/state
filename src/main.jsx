import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import State from "./state";
import Renshu from "./renshu";
import Antd from "./antd";
import Con from "./conditional";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <State /> */}
    {/* <Renshu /> */}
    <Antd />
    <Con />
  </React.StrictMode>
);
