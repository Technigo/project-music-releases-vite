import data from "./data.json";
import { Album } from "./components/Album.jsx";
import { Header } from "./components/Header.jsx";

export const App = () => {
  const albums = data.albums;
  console.log(albums);
  const renderAlbums = () => {
    return albums.map((album) => {
      <Album
        key={album.id}
        name={album.albums}
        artist={album.artists}
        cover={album.images}
      />;
      })
  }


  return (
    <div>
  <Header />
  <Album />
  </div>
  )
};


