import dotsIcon from "../assets/icons/dots.svg";
import heartIcon from "../assets/icons/heart.svg";
import playIcon from "../assets/icons/play.svg";
import { useState } from "react"; //react hook
import "./CoverImage.css";

export const CoverImage = ({ coverImage }) => {
  const [isHovered, setIsHovered] = useState(false); //use onMouseOver or onMouseEnter?
  //  const [isPressed, setIsPressed] = useState(false);
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
      onMouseLeave={handleMouseLeave}
    >
      {/* // <div className="cover-img"> */}
      <img className="album-cover" src={coverImage} alt="album cover image" />
      {isHovered && (
        // Had to change from just "icon" to add favorite, play and dots before to target them in css
        <div className="hoverIcon">
          <img src={heartIcon} alt="favorite" className="favorite-icon" />
          <img src={playIcon} alt="play" className="play-icon" />
          <img src={dotsIcon} alt="more" className="dots-icon" />
        </div>
      )}
    </div>
  );
};
