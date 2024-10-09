import "./Header.css"
import logo from "../../assets/icon.profile.png";

export const Header = () => {
  return (
    <header>
      <h1>Latest Releases</h1>
      <img src={logo} alt="Logo" className="header-logo" />
    </header>
  )
}