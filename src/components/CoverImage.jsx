import PropTypes from 'prop-types';
import IconHeart from "../assets/icons/heart.svg";
import IconPlay from "../assets/icons/play.svg";
import IconDots from "../assets/icons/dots.svg";
import './coverimage.css';

const CoverImage = ({ coverImage }) => {
  return (
    <div className="cover-image-wrapper">
      <div className="cover-image">
        <img src={coverImage} alt="Album Cover" />
      </div>
      <div className="overlay">
        <div className="overlay-buttons-container">
          <img src={IconHeart} className="custom-button" alt="Heart Icon" />
          <img src={IconPlay} className="custom-button" alt="Play Icon" />
          <img src={IconDots} className="custom-button" alt="Dots Icon" />
        </div>
      </div>
    </div>
  );
};

CoverImage.propTypes = {
  coverImage: PropTypes.string.isRequired,
};

export default CoverImage;
