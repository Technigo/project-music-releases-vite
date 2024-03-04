import data from "../data.json";
import { Header } from "./Header.jsx";
import { Album } from "./Album.jsx";

console.log(data);

export const App = () => {
  const albums = data.albums.items;

  return (
    <div id="app">  {/* why do we need this id? */}
      <Header />
      {/* Below explaination again */}
      {albums.map((album) => {
        return (
          <Album
            key={album.id}
            name={album.name}
            artists={album.artists}
            albumImageUrl={album.images[1].url}
          />
        );
      })}
    </div>
  );
};
