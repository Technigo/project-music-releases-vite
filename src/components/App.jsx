import React from 'react';
import jsonData from '../data.json'; // Import your JSON data
import Album from './Album';

const App = () => {
  return (
    <div className="app">
      {jsonData.albums.items.map((album, index) => (
        <Album
          key={index}
          albumName={album.name}
          artistNames={album.artists.map((artist) => artist.name).join(', ')}
          coverImages={album.images}
          externalUrls={album.external_urls}
        />
      ))}
    </div>
  );
};

export default App;






 