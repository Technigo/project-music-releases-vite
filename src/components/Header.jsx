import "./Header.css"
import logo from "../assets/logo.png"

export const Header = () => {
  return (
    <>
      < header className="Header">
        <h1><img src={logo} alt="logo" className="SoundScape logo" />SoundScape</h1>
        <p>Explore trending artists and albums</p>
      </header >
    </>
  );
};



