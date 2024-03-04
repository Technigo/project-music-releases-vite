import data from "../data.json";
import { Header } from "./Header.jsx";
import { Album } from "./Album.jsx";

console.log(data);

export const App = () => {
  const albums = data.albums.items;

  return (
    <div id="hello-hello">
      <Header />
      {albums.map((album) => {
        return <Album key={album.id} name={album.name} releaseDate={album.release_date} artists={album.artists} />;
      })}
    </div>
  );
};
