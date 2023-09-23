import Header from './components/Header';
import AlbumCard from './components/AlbumCard';
import data from './data.json';
import './index.css';

function Album() {
  const albums = data.albums.items;

  return (
    <div>
      <Header />
      <div className="album-grid">
        {albums.map((album) => (
          <AlbumCard key={album.id} album={album} />
        ))}
      </div>
    </div>
  );
}

export default Album;

