import React, { useEffect, useState } from 'react';
import data from "./data.json";
import { Header } from "./Components/Header/Header";
import { Album } from "./Components/Album/Album";
import style from "./index.css";

export const App = () => {
  const [uniqueAlbums, setUniqueAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  console.log(data); // Log the data to the console
  useEffect(() => {
    // Simulate an asynchronous data fetch (replace with actual data fetching)
    setTimeout(() => {
      const filteredAlbums = data.albums.items.slice(0, 50); // Filter the first 50 albums
      setUniqueAlbums(filteredAlbums);
      setIsLoading(false); // Set loading state to false when data is available
    }, 100); // Simulated delay for fetching data
  }, []);


  return (
    <div>
      <Header />

      {/* Conditional rendering based on loading state */}
      {isLoading ? (
        <p></p> // Display a loading indicator
      ) : (
        <div className="album-list">
          {uniqueAlbums.map((album) => (
            <div className="album-container" key={album.id}>
              
              <img src={album.images[1].url} alt="Album Cover" />
              <a href={album.external_urls.spotify}>
              <h3>{album.artists[0].name}</h3>
              </a>
              <h2>{album.song}</h2>
              
              <a href = {album.external_urls.spotify}>
              <p>{album.name}</p>
              </a>
              {/* Add other album details here */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
