import data from "./data.json";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Album } from "./components/Album";

import './index.css';


console.log(data);

export const App = () => {
  return (
    <div>
      <Header />
      <div className="album-container">
        {data.albums.items.map((album) => (
          <Album key={album.id} album={album} />
        ))}
      </div>
      <Footer />
    </div>
  );
};
