import data from "./data.json";
import { Album } from './components/Album';
import { Header } from './components/Header';

console.log(data);

export const App = () => {
  const albumItems = data.albums.items; // Store the array in a variable

  return (
    <div className="app">
      <Header />
      <div className="album-wrapper">
        {albumItems.map((album) => (
          <Album
            key={album.id}
            albumData={album} // Pass the entire album object as a prop
          />
        ))}
      </div>
    </div>
  );
};
