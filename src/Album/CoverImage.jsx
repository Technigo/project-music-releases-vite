import dots from "../assets/icons/dots.svg";
import heart from "../assets/icons/heart.svg";
import playIcon from "../assets/icons/play.svg";
import PropTypes from "prop-types";

export const CoverImage = ({ image }) => {
  return (
    <div className="coverImage">
      <img src={image} alt="Album cover image" />
      <div className="icons">
        <img src={dots} alt="Three dots" className="dot icon" />
        <img src={heart} alt="Heart" className="heart icon" />
        <img src={playIcon} alt="Play button" className="play icon"/>
      </div>
    </div>
  );
};

CoverImage.propTypes = {
  image: PropTypes.string.isRequired,
};