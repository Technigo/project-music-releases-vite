import { PropTypes } from 'prop-types';

export const Sidebar = ({ isNavOpen, setIsNavOpen }) => {
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
        <div className="nav-content"></div>
      </nav>
    </>
  );
};

Sidebar.propTypes = {
  isNavOpen: PropTypes.bool.isRequired,
  setIsNavOpen: PropTypes.func.isRequired,
};
