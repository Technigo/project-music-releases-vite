import data from "./data.json";
import { Album } from "./Components/Album";
import { Header } from "./Components/Header";
import "./App.css";

export const App = () => {
  return (
    <div>
      <Header />
      <div className="albumGrid">
        {data.albums.items.map((album, index) => (
          <Album key={index} album={album} />
        ))}
      </div>
    </div>
  );
};
