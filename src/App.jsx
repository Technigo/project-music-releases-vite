import data from "./data.json";
import { Album } from "./components/Album";
import { Header } from "./components/Header";

console.log(data);

export const App = () => {
  const showAlbums = data.albums.items.map((album) => {
    return <Album key={album.id} albumData={album} />;
  });

  return (
    <div>
      <Header />
      <div className="albums-container"> {showAlbums} </div>
    </div>
  );
};
