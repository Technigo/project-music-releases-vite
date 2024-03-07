import data from "./data.json";
import { Album } from "./components/Album";
import { Header } from "./components/Header.jsx";
import { SortAlbums } from "./components/Sort.jsx";
import { SortSingles } from "./components/Sort.jsx";
import "./components/header.css";

export const App = () => {
  const { albums } = data;

  const renderAlbum = (arr) => {
    const renderedAlbum = arr.map(
      ({ name, artists, id, images, external_urls }) => {
        return (
          <Album
            name={name}
            key={id}
            artists={artists}
            images={images}
            external_urls={external_urls}
          />
        );
      }
    );
    return renderedAlbum;
  };

  return (
    <>
      <Header />
      <div className="all-items album-collection">
        {renderAlbum(albums.items)}
      </div>
      <div className="only-albums album-collection">
        <div className="album album-type">
          <h2>Albums</h2>
        </div>
        {renderAlbum(SortAlbums())}
      </div>
      <div className="only-singles album-collection">
        <div className="album album-type">
          <h2>Singles</h2>
        </div>
        {renderAlbum(SortSingles())}
      </div>
    </>
  );
};
