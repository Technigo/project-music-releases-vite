import { Header } from "./Album components/common/Header.jsx";
import { Album } from "./Album components/Album.jsx";
import data from "./data.json";
import "./App.css";

console.log(data);

export const App = () => {
  const albums = data.albums.items;
  const renderAlbums = albums.map(
    ({ id, name, images, artists, external_urls }) => (
      <Album
        albumName={name}
        key={id}
        coverImage={images[0].url}
        artists={artists}
        albumURL={external_urls.spotify}
      />
    )
  );

  return (
    <div className="wrapper">
      <Header />
      <section className="main-container">{renderAlbums}</section>
    </div>
  );
};
