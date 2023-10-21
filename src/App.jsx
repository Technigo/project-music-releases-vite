import { useState } from 'react';

import { Album } from './components/Album';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import data from './data.json';

export const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div>
      <Sidebar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <div className="main-body">
        <div
          className={`${isNavOpen ? 'main-container-open' : 'main-container'}`}
        >
          <Header text="New Albums & Singles" />
          <div className="album-collection">
            {data.albums.items.map(album => {
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
