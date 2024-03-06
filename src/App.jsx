import { Album } from "./components/Album";
import data from "./data.json";

export const App = () => {
  const { albums } = data;
  
  const renderAlbums = albums.items.map(
    ({ name, artists, images, external_urls }) => (
      <Album
        albumName={name}
        artists={artists}
        coverImage={images}
        albumUrl={external_urls}
      />
    )
  );
  return <section>{renderAlbums}</section>;
};
