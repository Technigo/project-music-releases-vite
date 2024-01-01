import data from "./data.json";
import { Album } from "./components/Album/Album.jsx";
import { Header } from "./components/Header/Header.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
export const App = () => {
  return (
    <>
      <Header />
      <section className="container">
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
      <Footer />
    </>
  );
};
