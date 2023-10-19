import "./index.css";
import { Header } from "./components/Header";
import { Album } from "./components/Album/Album";
import data from "./data.json";

export const App = () => {
  const albums = data.albums.items;
  const onlyAlbums = albums.filter((album) => album.album_type === "album");
  const onlySingles = albums.filter((album) => album.album_type === "single");

  const renderAlbumComponent = (albumOrSingleArray) =>
    albumOrSingleArray.map(({ id, name, artists, external_urls, images }) => {
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

  const renderedAlbums = renderAlbumComponent(onlyAlbums);
  const renderedSingles = renderAlbumComponent(onlySingles);

  return (
    <>
      <header>
        <Header />
      </header>
      <section className="main__albums_singles">
        <section className="main__albums_singles_column">
          <h2>Albums</h2>
          <div className="main__albums_singles_container">{renderedAlbums}</div>
        </section>
        <section className="main__albums_singles_column">
          <h2>Singles</h2>
          <div className="main__albums_singles_container">
            {renderedSingles}
          </div>
        </section>
      </section>
      <section className="albumOuter"></section>
    </>
  );
};
