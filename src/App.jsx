// Imported compontents
import data from "./data.json";
import { Header } from "./Components/Header";
import { Album } from "./Components/Album";
import { Footer } from "./Components/Footer";
import { ArtistName } from "./Components/ArtistName";
// import { Icons } from "./Components/icons";

// Data from Json file stored in albumsArray variable.
const albumsArray = data.albums.items;

// JS App parent compontent
export const App = () => {
  // const albums = data.albums;
  // console.log(albums);

  return (
    <>
      <Header />
      <section>
        <Album albumsArray={albumsArray} />
        <ArtistName albumsArray={albumsArray} />
        {/* <Icons albumsArray={albumsArray} /> */}
      </section>
      <Footer />
    </>
  );
};
