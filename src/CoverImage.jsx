import "./CoverImage.css";

import heartIcon from "./assets/icons/heart.svg";
import playIcon from "./assets/icons/play.svg";
import dotsIcon from "./assets/icons/dots.svg";
export const CoverImage = ({ image, alt }) => {
  return (
    <div>
      <img className="cover-image" src={image} alt={alt} />
      <div className="icons">
        <img id="icon-small" src={heartIcon} alt="heart-icon" />
        <img id="icon-big" src={playIcon} alt="play-icon" />
        <img id="icon-small" src={dotsIcon} alt="dots-icon" />
      </div>
    </div>
  );
};
