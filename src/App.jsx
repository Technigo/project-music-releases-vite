import React from "react";
import data from "./data.json";
import { HeaderText } from "./Header.jsx";
import { Album } from "./Album.jsx"; // Ensure the import matches your component name
import "./index.css";

export const App = () => {
  const albums = data.albums.items;

  const renderAlbums = () => {
    console.log(albums);
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
      <div className="FlexContainer"> {/* Add the FlexContainer class here */}
        {renderAlbums()}
      </div>
    </div>
  );
};

