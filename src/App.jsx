// Importing necessary modules and components
import data from "./data.json";
import "./index.css";
import { Header } from "./components/Header";
import { Album } from "./components/Album";

export const App = () => {
  //function map over album array
  const renderAlbums = () => {
    // data.albums.items === the chained object reference that contains the info from the albums
    const albumInfo = data.albums.items;
    // Extracting the albums information from the data
    return albumInfo.map((album) => {
      console.log(album);

      // Creating a reference to the current album object
      let albumObject = album;
      return <Album key={album.id} albumInfo={albumObject} />;
    });
  };

  // Rendering the Header and the list of albums
  return (
    <>
      <Header />
      <section className="album-wrapper">{renderAlbums()}</section>
    </>
  );
};
