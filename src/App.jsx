import React from 'react';        // Import the React library
import data from './data.json';    // Import data from data.json
import Album from './Album';       // Import the Album component
import AlbumName from './AlbumName';
import ArtistName from './ArtistName'; // Import the ArtistName component
import CoverImage from './CoverImage'; // Import the CoverImage component
import Header from './Header';       // Import the Header component
import './index.css';               // Import the CSS styles from index.css

const App = () => {                // Define the App component
  return (
    <div className="App">
      {data.map((album, index) => (
        <Album key={index} albumData={album} />
      ))}
    </div>
  );
};

export default App;  