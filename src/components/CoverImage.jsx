import PropTypes from 'prop-types';

// Import icons and CSS for component
import IconHeart from "../assets/icons/heart.svg";
import IconPlay from "../assets/icons/play.svg";
import IconDots from "../assets/icons/dots.svg";
import './coverimage.css';

// Define component CoverImage
const CoverImage = ({ coverImage }) => {
  return (
    <div className="cover-image-wrapper">
      <div className="cover-image">
        {/* Render image with 'coverImage' prop */}
        <img src={coverImage} alt="Album Cover" />
      </div>
      <div className="overlay">
        <div className="overlay-buttons-container">
          {/* Render icons for buttons */}
          <img src={IconHeart} className="custom-button" alt="Heart Icon" />
          <img src={IconPlay} className="custom-button" alt="Play Icon" />
          <img src={IconDots} className="custom-button" alt="Dots Icon" />
        </div>
      </div>
    </div>
  );
};

// Define prop types for CoverImage
CoverImage.propTypes = {
  coverImage: PropTypes.string.isRequired,
};

export default CoverImage;
