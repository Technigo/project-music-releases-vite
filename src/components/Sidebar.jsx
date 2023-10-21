import { PropTypes } from 'prop-types';

import { Header } from './Header';
import { Playlist } from './Sidebar/Playlist';
import { SidebarLink } from './Sidebar/SidebarLinks.jsx';
import { sidebarLinks } from '../constants.js';

export const Sidebar = ({
  isNavOpen,
  setIsNavOpen,
  playlists,
  albumData,
  setAlbumData,
  setHeaderName,
  headerName,
}) => {
  const filterAlbumData = filter => {
    if (filter == '') {
      setAlbumData(albumData);
    } else {
      const filtered = albumData.filter(album => album.album_type === filter);
      setAlbumData(filtered);
    }

    // close the navbar on mobile and tablet when link is clicked
    if (window.screen.width < 1024) {
      setIsNavOpen(false);
    }
  };
  return (
    <>
      <button
        className={`sidebar-toggle ${
          isNavOpen ? 'sidebar-toggle-open' : 'sidebar-toggle-closed'
        }`}
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        <span className="material-symbols-outlined">menu</span>
      </button>
      <nav className={`nav ${isNavOpen ? 'nav-open' : 'nav-closed'}`}>
        <div className="nav-content">
          <div className="nav-links">
            {sidebarLinks.map(({ description, type }) => (
              <div key={type} onClick={() => setHeaderName(description)}>
                <SidebarLink
                  description={description}
                  onClick={filterAlbumData}
                  setHeaderName={setHeaderName}
                  type={type}
                  disable={headerName === description}
                />
              </div>
            ))}
          </div>
          <Header text={'Playlists'} />
          {playlists.map(playlist => (
            <Playlist key={playlist.id} playlist={playlist} />
          ))}
        </div>
      </nav>
    </>
  );
};

Sidebar.propTypes = {
  isNavOpen: PropTypes.bool.isRequired,
  setIsNavOpen: PropTypes.func.isRequired,
  playlists: PropTypes.array.isRequired,
};
