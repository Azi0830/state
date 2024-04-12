import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import State from "./state";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <State />
  </React.StrictMode>
);
