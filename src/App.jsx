import { Header } from "./Header.jsx";
import { Album } from "./Album/Album.jsx";
import data from "./data.json";

export const App = () => {
  const { albums } = data;
  const renderAlbums = albums.items.map(({ id, name, artists, images }) => (
    <Album  key={id} name={name} artists={artists} image={images[1].url}  />
  ));
  return <div>Albums:{renderAlbums}</div>;
};
