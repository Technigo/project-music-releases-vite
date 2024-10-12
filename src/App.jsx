// Import album data from the JSON file
import data from "./data.json";
// Import the AlbumCard component to display individual albums
import AlbumCard from "./components/AlbumCard";
// Import CSS styles for the application
import "./styles.css";  
import "./index.css";

export const App = () => {
  return (
    <div className="album-list">
      {data.albums.items.map((album) => (
        <AlbumCard key={album.id} album={album} />
      ))}
    </div>
  );
};
