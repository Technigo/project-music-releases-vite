import React from 'react';
import data from './data.json'; // Import your JSON data
import Album from './components/Album';
import Header from './components/Header';
import './index.css';

const App = () => {
  return (
    <div className="app">
      <Header /> {/* This should include the header */}
      <div className="album-container">
        {jsonData.albums.items.map((album) => (
          <Album
            key={album.id}
            albumName={album.name}
            artistNames={album.artists.map((artist) => artist.name).join(', ')}
            coverImages={album.images}
            externalUrls={{ spotify: album.external_urls.spotify, artist: album.artists[0].external_urls.spotify }}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
