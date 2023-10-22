import { useState } from 'react';

import { Album } from './components/Album';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { headerSinglesAlbums } from './constants';
import { albums } from './data.json';
import { playlists } from './stretched-goal.json';

export const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [albumData, setAlbumData] = useState(albums.items);
  const [headerName, setHeaderName] = useState(headerSinglesAlbums);
  return (
    <div>
      <Sidebar
        isNavOpen={isNavOpen}
        setIsNavOpen={setIsNavOpen}
        playlists={playlists.items}
        setAlbumData={setAlbumData}
        albumData={albums.items}
        setHeaderName={setHeaderName}
        headerName={headerName}
      />
      <div className="main-body">
        <div
          className={`${isNavOpen ? 'main-container-open' : 'main-container'}`}
        >
          <Header text={headerName} />
          <div className="album-collection">
            {albumData.map(album => {
              return (
                <div key={album.id} className="album">
                  <Album album={album} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
