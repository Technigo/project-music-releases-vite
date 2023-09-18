import React from "react";
import data from "./data.json";
import { HeaderText } from "./Header.jsx";
import { AlbumName } from "./AlbumName.jsx";


import "./index.css";
console.log(data);


export const App = () => {
  // Access the "items" array within "albums"
  return (
    <div id="root" className="root">
      <HeaderText />
      <AlbumName />

    </div>
  );
}





