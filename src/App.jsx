import data from "./data.json";
import { Header } from "./components/Header.jsx";
import { Album } from "./components/Album.jsx";

export const App = () => {
  const albums = data.albums.items;
  const renderAlbums = albums.map(({ artists, images, name, external_urls }, index) => (
    <Album key={index} coverImages={images} albumName={name} artists={artists} href={external_urls.spotify} />
  ));
  return (
    <div>
      <Header />
      <div>
        <section className="album-grid">{renderAlbums}</section>;
      </div>
    </div>
  );
};
