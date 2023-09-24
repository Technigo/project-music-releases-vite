import data from "./data.json";
import { Album } from "./components/Album/Album";
import { Header } from "./components/Header/Header";

export const App = () => {
  return (
    <>
      <Header />
      <section className="container">
        {/* Information received from data is mapped and calls on the album component to display it */}
        {data.albums.items.map((album) => {
          return (
            <Album
              key={album.id}
              albumInfo={[album.name, album.external_urls.spotify]}
              albumCover={album.images[0].url}
              artists={album.artists}
            />
          );
        })}
      </section>
    </>
  );
};
