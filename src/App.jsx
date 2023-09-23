import React from "react";
import data from "./data.json";
import { Album } from "./components/Album.jsx";
import { Header } from "./components/Header.jsx";

export const App = () => {
  const albums = data.albums.items;
  console.log(albums);
  return (
    <div className="front-page">
      <Header />
      <div className="album-wrapper">
        {albums.map((album) => {
          return (
            <Album 
              key={album.id} 
              name={album.name}
              artist={album.artists.map((artist) => artist.name)} 
              cover={album.images} />
          )
        })}
      </div>
    </div>
  );
};


