import React from "react";
import data from "./data.json";
import "./app.css";
import { Header } from "./components/Header/Header.jsx";
import { Album } from "./components/Albumsqaure/Album.jsx";

export const App = () => {
  const albums = data.albums.items;
  console.log(albums);

  const renderAlbums = () => {
    return albums.map((album) => (
      <Album
        key={album.id}
        name={album.name}
        artists={album.artists}
        images={album.images}
        albumURL={album.external_urls.spotify}
      />
    ));
  };

    return (
      <div id="root" className="root">
      <Header />
      <div className="FlexContainer">
        {renderAlbums()}
      </div>
    </div>
  );
};

 