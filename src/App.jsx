// App
import React from "react";
import data from "./data.json";
import { HeaderText } from "./Header.jsx";
import Album from "./Album";
import "./index.css";
import "./AlbumStyle.css";

export const App = () => {
  const albums = data.albums.items;

  const renderAlbums = () => {
    return albums.map((album) => (
      <Album
        key={album.id}
        album={album.name}
        artists={album.artists}
        images={album.images}
        externalUrl={album.external_urls.spotify}
      />
    ));
  };

  return (
    <div id="root" className="root">
      <HeaderText />
      <div className="FlexContainer">
        {renderAlbums()}
      </div>
    </div>
  );
};
