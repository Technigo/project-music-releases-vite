// Import data from json file
import data from "./data.json";

// Import header and album card components
import { Header } from "./components/Header";
import { AlbumCard } from "./components/AlbumCard";

export const App = () => {
  return (
    <>
      {/* Add header component */}
      <Header />

      <main className="album-card-container">
        {/* Map items from items in the json data, naming it albumcard */}
        {data.albums.items.map((albumcard) => (
          < AlbumCard key={albumcard.id} albumcard={albumcard} />
        ))}
      </main>
    </>
  );
};