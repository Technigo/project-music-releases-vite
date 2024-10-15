import data from "./data.json"; // Spotify data
import { Header } from "./components/Header/Header.jsx";
import { Album } from "./components/Album/Album.jsx";
import "./App.css";

export const App = () => {
  return (
    <>
      <Header />

      <div className="album-grid">
        {/* Loop through each album in the data */}
        {data.albums.items.map((album) => (
          <Album key={album.id} album={album} />
        ))}
      </div>
    </>
  );
};
