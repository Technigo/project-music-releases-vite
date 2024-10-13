// src/App.jsx

// Importing React to create our component
import React from 'react';

// This imports all the Spotify data from the JSON file
import data from "./data.json";

// This imports the Album component
import { Album } from './components/Album';

//This is the main App compontent
export const App = () => {
  return (
    // This is the main container for the whole app
    <div className="app">
      <div className="title-container">
        <h1>New Releases</h1>
      </div>
       {/* This div contains all album cards */}
      <div className="album-grid">
         {/* Breakdown of this line:
            1. data.albums.items is an array of albums
            2. .map() goes through each album one by one
            3. For each album, an Album component is created
            4. Each Album component is given a unique 'key' + all the album data */}
        {data.albums.items.map((album) => (
          <Album key={album.id} album={album} />
        ))}
      </div>
    </div>
  );
};


