import "./Header.css";
import SpotifyLogo from "../../assets/spotify-logo.png";

export const Header = () => {
  return (
    <>
      <header>
        <img src={SpotifyLogo} alt="Spotify" />
        <h1>New albums & singles</h1>
      </header>
    </>
  );
};
