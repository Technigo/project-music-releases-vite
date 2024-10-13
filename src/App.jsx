import data from "./data.json";
import AlbumCard from "./components/AlbumCard";
import Header from "./components/Header"
import Footer from "./components/Footer"

export const App = () => {
  return (
    <>
      <Header />
      <main className="album-list">
        {data.albums.items.map((album) => (
          <AlbumCard
            key={album.id}
            album={album}
          />
        ))}
      </main>
      <Footer />
    </>
  );
};

export default App;