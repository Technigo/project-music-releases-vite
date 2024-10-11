// Import Melodify logo from assets folder
import MelodifyLogo from "../assets/melodify_logo.png"

export const Header = () => {
  return (

    <header>
      <div className="logo">
        <h1>Melodify</h1>

        <img src={MelodifyLogo} alt="Melodify logo" />
      </div>

      <button className="log-out-btn">Log out</button>
    </header>
  );
};