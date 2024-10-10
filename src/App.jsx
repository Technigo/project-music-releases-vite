import React from "react";
import data from "./data.json";
import { Header } from "./Components/Header";
import { extractedAlbums } from "./Components/Album";
import { ArtistName } from "./Components/ArtistName";

//console.log(data);

export const Albums = data.albums.items
//console.log(albums);

//const artists = data.albums.artists
//console.log(artists);

/*const extractedAlbums = albums.map((album) => {

  const artistName = album.artists[0].name;
  const albumName = album.name;
  const coverImage = album.images[0].url;

  return {
    artistName,
    albumName,
    coverImage,
  };

});*/

//console.log(extractedAlbums);

//-------------------Extracted albums finished?--------------------//

//What shows in the browser?
export const App = () => {
  const albums = data.albums.items

  return (
    <>
      <Header />
      <div>
        <ArtistName />
      </div>
    </>)
};
