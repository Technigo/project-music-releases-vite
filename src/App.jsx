import { Album } from "./components/Album";
import { Header } from "./components/Header";
import data from "./data.json";

export const App = () => {
  const { albums } = data;

  const renderAlbums = albums.items.map(
    ({ name, artists, images, external_urls, id }) => (
      <div key={id}>
        <Album
          albumName={name}
          artists={artists}
          coverImage={images}
          albumUrl={external_urls}
        />
      </div>
    )
  );
  return (
    <>
      <Header />
      <section className="Container">{renderAlbums}</section>;
    </>
  );
};
