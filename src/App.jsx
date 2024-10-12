import React from 'react';
import data from './data.json';
import { Header } from './components/Header';
import { Album } from './components/Album';

export const App = () => {
  return (
    <div>
      <Header />
      <div className="App">
        {data.albums.items.map((album) => (
          <Album key={album.id} album={album} />
        ))}
      </div>
    </div>
  );
};
