import { Header } from "./Header.jsx";
import { Album } from "./Album/Album.jsx";
import data from "./data.json";

export const App = () => {
  const { albums } = data;
  const renderAlbums = albums.items.map(
    ({ id, name, external_urls, artists, images }) => (
      <Album
        key={id}
        name={name}
        albumUrl={external_urls.spotify}
        artists={artists}
        image={images[1].url}
      />
    )
  );
  return (
  <div>
  <Header />
  <div className="albumSection">{renderAlbums}</div>
  </div>
  )
};
