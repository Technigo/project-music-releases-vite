import heroVideo from "../../assets/icons/heroVideo.webm";
import "./Header.css";

export const Header = () => {
  return (
    <header className="hero-header">
      {/* Video Background */}
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src={heroVideo} type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Title Overlay */}
      <h1 className="header-title">Musify</h1>
    </header>
  );
};
