//Outer dependencies
import React from "react";
import ReactDOM from "react-dom/client";

//Local dependencies
import { App } from "./App.jsx";

//Style file(s)
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
