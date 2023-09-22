import data from "./data.json";
import { Album } from "./components/Album";

export const App = () => {
  //function map over album array
  const renderAlbums = () => {
    // data.albums.items === the chained object reference that contains the info from the albums
    const albumInfo = data.albums.items;
    return albumInfo.map((album) => {
      console.log(album);

      let albumObject = album;
      return <Album key={album.id} albumInfo={albumObject} />;
    });
  };

  return (
    <>
      {/* <Header /> */}
      <section className="album-wrapper">{renderAlbums()}</section>
    </>
  );
};
