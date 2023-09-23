import React from "react";
import data from "./data.json";
import { Album } from "./components/Album.jsx";
import { Header } from "./components/Header.jsx";
import "./components/App.css";

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
              artistName={album.artists.map((artist) => artist.name)} 
              artistLink={album.artists.map((artist) => artist.external_urls.spotify)}
              cover={album.images} />
          )
        })}
      </div>
    </div>
  );
};


