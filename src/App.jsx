import React from "react";
import data from "./data.json";
import Album from './Album.jsx'; 

console.log(data);

export const App = () => {
  return (
    <div>
      <h1>Music Releases</h1>
      {/* Mapping through the album data */}
      <div className="album-list">
        {data.albums.items.map((album) => (
          <Album key={album.id} album={album} />
        ))}
      </div>
    </div>
  );
};