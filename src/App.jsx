import data from "./data.json";
import { Header } from "./Header.jsx";
import { Album } from "./assets/Components/Album/Album.jsx";

export const App = () => {
  return (
    <section className="container">
      <Header />
      <div>
        <Album albums={data.albums.items} />
      </div>
    </section>
  );
};
