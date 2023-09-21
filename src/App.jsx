import data from "./data.json";
//import { Header } from ./Album ?????
//import { Album } from "./Components/Album";

//console.log(data);

const albums = data.albums.items
//console.log(albums);

//const artists = data.albums.artists
//console.log(artists);

const extractedAlbums = albums.map((album) => {

  const artistName = album.artists[0].name;
  const albumName = album.name;
  const coverImage = album.images[0].url;

  return {
    artistName,
    albumName,
    coverImage,
  };

});

console.log(extractedAlbums);


//header to export? Make one?
export const App = () => {
  return <div>
    Hallo!
  </div>;
};
