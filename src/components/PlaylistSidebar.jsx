import React, { useState } from 'react';
import playlistsData from '../stretch-goal.json'; 
import './styling/playlistSidebar.css'; 
import playlistIcon from '../assets/icons/playlist.png'; 
import arrowIcon from '../assets/icons/arrow.png';

const SidebarLayout = () => {
  const [isOpen, setIsOpen] = useState(true);  

  const togglePlaylist = () => setIsOpen(!isOpen);

  const playlists = playlistsData.playlists.items;

  return (
    <div className="sidebar-layout">
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <div className="playlist-header" onClick={togglePlaylist}>
          <img src={playlistIcon} alt="Playlists" className="playlist-icon" />
          <h3 className="playlist-title">Playlists</h3>
          <img 
            src={arrowIcon} 
            alt="Toggle" 
            className={`arrow-icon ${isOpen ? 'open' : 'closed'}`} 
          />
        </div>

        {isOpen && (
          <ul className="playlist-list">
            {playlists.map((playlist) => (
              <li key={playlist.id} className="playlist-item">
                <img src={playlist.images[0].url} alt={playlist.name} className="playlist-image" />
                <span>{playlist.name}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className={`main-content ${isOpen ? '' : 'full-width'}`}>
      </div>
    </div>
  );
};

export default SidebarLayout;
