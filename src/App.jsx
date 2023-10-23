// Imported compontents
import data from "./data.json";
import { Header } from "./Components/Header";
import { Album } from "./Components/Album";
import { Footer } from "./Components/Footer";

// Data from Json file stored in albumsArray variable.
const albumsArray = data.albums.items;

// JS App parent compontent
export const App = () => {

  return (
    <div className="main-container">
      <Header />
      <section>
        <Album albumsArray={albumsArray} />
      </section>
      <Footer />
    </div>
  );
};
