import data from "./data.json";
import { Header } from "./Components/Header";
import { Album } from "./Components/Album";
import { Footer } from "./Components/Footer";
import { ArtistName } from "./Components/ArtistName";

const albumsArray = data.albums.items;

export const App = () => {
  const albums = data.albums;
  console.log(albums);

  return (
    <>
      <Header />
      <section>
        <Album albumsArray={albumsArray} />
        <ArtistName albumsArray={albumsArray} />
      </section>
      <Footer />
    </>
  );
};
