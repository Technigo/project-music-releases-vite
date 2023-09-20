import data from "./data.json";
import { Header } from "./Components/Header";
import { Album } from "./Components/Album";
// import { AlbumName } from "./Components/AlbumName";
// import { ArtistName } from "./Components/ArtistName";
// import { CoverImage } from "./Components/CoverImage";

// console.log(data.albums.items);

export const App = () => {
  const albums = data.albums;
  console.log(albums);

  // Function map over Album array and get each album object to display to the UI
  return (
    <>
      <Header />
      <section>
      <Album albumName="Isaac"/>


      </section>
    </>
  );
};
