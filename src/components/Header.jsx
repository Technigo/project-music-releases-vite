import spotifyIcon from '../assets/icons/spotify.svg';

const Header = () => {
  return (
    <header>
      <h1 className="header">
        <img src={spotifyIcon} alt="Spotify Logo" className="spotifyIcon" />
        New albums and single releases
      </h1>
      <p>Find you next Favorite</p>
    </header>
  );
};

export default Header;