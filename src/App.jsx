import data from "./data.json";
import { Album } from "./components/Album/Album";

console.log(data);

export const App = () => {
  return (
    <section className="container">
      {data.albums.items.map((album) => {
        return (
          <div className="album" key={album.id}>
            <Album
              albumName={album.name}
              albumCover={album.images[0].url}
              artists={album.artists}
            />
          </div>
        );
      })}
    </section>
  );
};
