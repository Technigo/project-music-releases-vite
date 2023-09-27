import React from "react";
import data from "./data.json";
import Album from "./Album";
import "./index.css"


console.log(data);



export const App = () => {
  return (
    <div>
      <Album data={data.albums.items} />
    </div>);
};


