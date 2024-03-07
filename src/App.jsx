/* eslint-disable no-unused-vars */
import React from 'react';
import Album from './Album';
import data from './data.json';

export const App = () => {
  return (
    
    <div className="music-container">
      
       {}
      {data.albums.items.map((albumItem) => (
        <Album key={albumItem.id} albumData={albumItem} />
      ))}
    </div>
  );
};
