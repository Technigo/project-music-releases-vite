import MenuIcon from "../assets/icons/menu-icon.svg";
import CloseIcon from "../assets/icons/close-icon.svg";
import SpotifyIcon from "../assets/icons/spotify-icon.svg";

export const Header = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <>
      <header>
        {!isSidebarOpen ? (
          <img
            id="menu-icon"
            className="menu-icon"
            src={MenuIcon}
            alt="Menu-Icon"
            width="25"
            height="25"
            onClick={toggleSidebar}
          />
        ) : (
          <img
            id="close-icon"
            className="close-icon"
            src={CloseIcon}
            alt="Close-Icon"
            width="30"
            height="30"
            onClick={toggleSidebar}
          />
        )}
        <h1>Music Releases from </h1>
        <img
          className="spotify-icon"
          src={SpotifyIcon}
          alt="Spotify-Icon"
          width="30"
          height="30"
        />
      </header>
    </>
  );
};
