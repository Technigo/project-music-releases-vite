import React from 'react';
import jsonData from '../data.json';
import Album from './Album';
import Header from './Header';
import '../index.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="album-container">
        {jsonData.albums.items.map((album) => (
          <Album
            key={album.id}
            albumName={album.name}
            artistNames={album.artists}
            coverImages={album.images}
            externalUrls={{
              spotify: album.external_urls.spotify,
              artist: album.artists.map((artist) => artist.external_urls.spotify),
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default App;







 