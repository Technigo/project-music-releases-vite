import data from "./data.json";
import { Album } from "./Album/Album.jsx";
import { Header } from "./Header/Header.jsx";
import { Footer } from "./Footer/Footer.jsx";

console.log(data);

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Album albumsAray={data.albums.items} />
      <Footer />
    </div>
  );
};
