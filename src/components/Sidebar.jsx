import { PropTypes } from 'prop-types';

import { Header } from './Header';
import { Playlist } from './Sidebar/Playlist';

export const Sidebar = ({ isNavOpen, setIsNavOpen, playlists }) => {
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
