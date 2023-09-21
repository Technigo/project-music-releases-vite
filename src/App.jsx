import data from "./data.json";
import { Header } from "./Album/AlbumComp/Header";
// import { AlbumName } from "./Album/AlbumComp/AlbumName";
// import { ArtistName } from "./Album/AlbumComp/ArtistName";
// import { CoverImage } from "./Album/AlbumComp/CoverImage";
import { Album } from "./Album/Album";

//Checking all the locations of the required information
console.log(data);
console.log("Artist Name=", data.albums.items[0].artists[0].name);
console.log("Album Name=", data.albums.items[0].name);
console.log("Album spotify link=", data.albums.items[0].external_urls.spotify);
console.log("Album image link=", data.albums.items[0].images[1].url);

export const App = () => {
  const albums = data.albums;

  // const renderAlbums = () => (
  //    return albums.map((album) => {
  //     return(
  //       <Album
  //         key={album.id}
  // artistName={album.items.artists.name}
  // albumName={album.items.name}
  // coverImage={album.items.images[1].url}
  // />
  // );
  //      });
  //   );

  return (
    <div>
      <Header />
      <Album
        albumImage="https://i.scdn.co/image/ab67616d00001e02ec65553ce98439bcf0595e60"
        albumName="123"
        artistName="JJ"
      />
      Find me in src/app.jsx!
    </div>
  );
};
