export const Header = () => {
  return (
    <>
      <header>
        <img
          id="menu-icon"
          className="menu-icon"
          src="./src/assets/icons/menu-icon.svg"
          alt="Menu-Icon"
          width="40"
          height="40"
        />
        <img
          id="close-icon"
          className="close-icon"
          src="./src/assets/icons/close-icon.svg"
          alt="Close-Icon"
          width="40"
          height="40"
        />
        <h1>Music Releases from </h1>
        <img
          className="spotify-icon"
          src="./src/assets/icons/spotify-icon.svg"
          alt="Spotify-Icon"
          width="40"
          height="40"
        />
      </header>
    </>
  );
};
