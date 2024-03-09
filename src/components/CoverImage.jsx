import dotsIcon from "../assets/icons/dots.svg";
import heartIcon from "../assets/icons/heart.svg";
import playIcon from "../assets/icons/play.svg";
import { useState } from "react"; 
import "./CoverImage.css";

export const CoverImage = ({ coverImage }) => {
  const [isHovered, setIsHovered] = useState(false); 
  const handleMouseOver = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div
      className="cover-img"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}>
      <img className="album-cover" src={coverImage} alt="album cover image" />
      {isHovered && (
        <div className="hoverIcon">
          <img src={heartIcon} alt="favorite" className="favorite-icon" />
          <img src={playIcon} alt="play" className="play-icon" />
          <img src={dotsIcon} alt="more" className="dots-icon" />
        </div>
      )}
    </div>
  );
};
