import PropTypes from "prop-types";
import "./CoverImage.css";
import dotsSvg from "../../assets/icons/dots.svg";
import heartSvg from "../../assets/icons/heart.svg";
import playSvg from "../../assets/icons/play.svg";

export const CoverImage = ({ image, name }) => {
  // Check if images array exists and has at least one element
  if (!image || image.length === 0) {
    return null; // Return null if images array is empty or undefined
  }

  return (
    <div className="image-container">
      <div className="cover-image">
        <img src={image.url} alt={name} />
      </div>
      <div className="icons">
        <div className="heart-icon">
          <img src={heartSvg} alt="hearticon" />
        </div>
        <div className="play-icon">
          <img src={playSvg} alt="playicon" />
        </div>
        <div className="dots-icon">
          <img src={dotsSvg} alt="dotsicon" />
        </div>
      </div>
    </div>
  );
};

CoverImage.propTypes = {
  image: PropTypes.object,
  name: PropTypes.string,
};
