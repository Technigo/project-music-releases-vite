import data from "./data.json";
import { Album } from "./Album.jsx";
import { Header } from "./Header.jsx";

console.log(data);

export const App = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="wrapper">
        {data.albums.items.map((album, i) => {
          return (
            <Album
              key={i}
              src={album.images[1].url}
              albumTitle={album.name}
              albumUrl={album.external_urls.spotify}
              artists={album.artists}
            />
          );
        })}
      </main>
    </div>
  );
};
