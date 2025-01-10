import data from './data.json';
import './index.css';
import { AlbumCard } from './components/AlbumCard';

export const App = () => {
  if (!data.albums || !data.albums.items || data.albums.items.length === 0) {
    return <p>No albums available.</p>;
  }

  return (
    <div className="albums-container">
      <h1>Albums</h1>
      <div className="albums-list">
        {data.albums.items.map((album) => (
          <AlbumCard key={album.id} album={album} />
        ))}
      </div>
    </div>
  );
};
