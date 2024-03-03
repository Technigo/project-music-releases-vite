import "./App.css";
import data from "./data.json";
import { Album } from "./components/Album";
import { Header } from "./components/Header";

export const App = () => {
  const albums = data.albums.items;

  const renderAlbums = () => {
    return albums.map(({ id, ...album }) => <Album key={id} album={album} />);
  };

  return (
    <>
      <Header />
      <div>
        <section className="albums">{renderAlbums()}</section>
      </div>
    </>
  );
};

export default App;
