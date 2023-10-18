import "./index.css";
import { Header } from "./components/Header";
import { Album } from "./components/Album/Album";
import data from "./data.json";

export const App = () => {
  const albums = data.albums.items;

  const renderAlbums = () =>
    albums.map(({ id, name, artists, external_urls, images }) => {
      return (
        <Album
          key={id}
          name={name}
          artists={artists}
          external_urls={external_urls.spotify}
          images={images[0]}
        />
      );
    });

  const renderContent = renderAlbums();

  return (
    <>
      <header>
        <Header />
      </header>
      <section className="albumOuter">{renderContent}</section>
    </>
  );
};
