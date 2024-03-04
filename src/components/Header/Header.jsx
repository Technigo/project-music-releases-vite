import "./Header.css";
import play from "../../assets/icons/play.svg";

export const Header = (data) => {
  console.log(data);
  return (
    <header>
      <h1>Music Releases</h1>
      <img src={play} alt="Play Icon" className="logo" />
    </header>
  );
};
