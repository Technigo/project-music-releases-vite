import React from 'react';
import jsonData from '../data.json'; // Import your JSON data
import Album from './Album';
import '../index.css';

const App = () => {
  return (
    <div className="app">
      {jsonData.albums.items.map((album) => (
        <Album
          key={album.id} // Use a unique identifier as the "key" prop
          albumName={album.name}
          artistNames={album.artists.map((artist) => artist.name).join(', ')}
          coverImages={album.images}
          externalUrls={{ spotify: album.external_urls.spotify, artist: album.artists[0].external_urls.spotify }}
        />
      ))}
    </div>
  );
};

export default App;






 