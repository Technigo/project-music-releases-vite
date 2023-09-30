import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import data from "./data.json"; // added this line
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App data={data} />    
  </React.StrictMode>
);
