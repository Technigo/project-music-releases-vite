import React from 'react';
import jsonData from '../data.json';
import Album from './Album';
import Header from './Header'; // if this is a child to the album shouldn't that be in there, if i put it there it's visible over every album
import '../index.css';

const App = () => {
  return (
    <div className="app">
      <Header /> {/* Include the Header component at the top of the page */}
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






 