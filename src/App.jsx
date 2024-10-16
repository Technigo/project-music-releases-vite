import data from "./data.json";
import { Album } from "./components/Album.jsx";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";


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
    <>
      <Header />
      <div className="albumSection">{renderAlbums}</div>
      <Footer />
    </>
  );
};


