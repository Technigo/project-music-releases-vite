/* eslint-disable no-unused-vars */
import React from "react";
import data from "./data.json";
import "./index.css";
import Album from "./album";

export const App = () => {
  const albums = data.albums.items;

  return (
    <div className="background"> {/* Apply background class to div */}
      <h1>Recent Spotify Releases</h1>

      <div className="album-list">
        {/* Use .map() to render an Album component for each album */}
        {albums.map((album) => (
          <Album key={album.id} album={album} />
        ))}
      </div>
    </div>
  );
};

export default App;
