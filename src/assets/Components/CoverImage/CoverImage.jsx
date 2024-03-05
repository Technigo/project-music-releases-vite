import "./CoverImage.css";

import heartIcon from "./icons/heart.svg";
import playIcon from "./icons/play.svg";
import dotsIcon from "./icons/dots.svg";
export const CoverImage = ({ image, alt }) => {
  return (
    // added classname
    <div className="container">
      <img className="cover-image" src={image} alt={alt} />
      <div className="overlay"></div>
      <div className="icons">
        <img id="icon-small" src={heartIcon} alt="heart-icon" />
        <img id="icon-big" src={playIcon} alt="play-icon" />
        <img id="icon-small" src={dotsIcon} alt="dots-icon" />
      </div>
    </div>
  );
};
