import data from "./data.json";
import { Album } from "./Album.jsx";
import { Header } from "./Header.jsx";
// console.log(data);

export const App = () => {
  const albums = data.albums;
  console.log(albums);
  // return <div>Find me in src/app.jsx!</div>;
  <Header />
  const renderAlbums = () => {
    return albums.map((album) => {
        <Album
          key={album.id}
          name={album.name}
          artist={album.artists}
          cover={album.images}
        />;
      })
  }
};


