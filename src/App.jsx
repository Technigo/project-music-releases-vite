import { Album } from "./components/Album";
import data from "./data.json";

console.log(data);

export const App = () => {
  const { albums } = data;

  // const renderAlbums = albums.map();

  return <Album />;
};
