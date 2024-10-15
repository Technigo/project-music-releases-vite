import React from 'react';
import Header from './components/Header';  
import './components/styling/app.css';  
import data from './data.json';  
import Album from './components/Albums';  
import PlaylistSidebar from './components/PlaylistSidebar';  

const App = () => {
  return (
    <div className="app-container"> 
      <Header />
      <div className="main-content">
        <PlaylistSidebar />  
        <div className="album-list">  
          {data.albums.items.map(album => (
            <Album key={album.id} album={album} />
          ))}
        </div>
      </div>
    </div>
  );
};


export default App;
