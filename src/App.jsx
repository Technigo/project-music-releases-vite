import { Album } from "./components/Album";
import { Header } from "./components/Header";
import data from "./data.json";

console.log(data);

export const App = () => {
  const showAlbums = data.albums.items.map((album) => {
    return <Album albumData={album}></Album>;
  });

  //const albumData = data.albums.items[0];

  return (
    <div>
      <Header></Header>
      {showAlbums}
    </div>
  );
};
