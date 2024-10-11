import PropTypes from 'prop-types';
import dotsIcon from '../assets/icons/dots.svg';
import heartIcon from '../assets/icons/heart.svg';
import playIcon from '../assets/icons/play.svg';

export const CoverImage = ({ imageUrl }) => {
  return (
    <div className="cover-image-wrapper">
      <img src={imageUrl} alt="Album cover" className="cover-image" />
      <div className="hover-buttons">
        <button className="hover-button">
          <img src={heartIcon} alt="Favorite" className="heartIcon" />
        </button>
        <button className="hover-button">
          <img src={playIcon} alt="Play" className="playIcon" />
        </button>
        <button className="hover-button">
          <img src={dotsIcon} alt="More options" className="dotsIcon" />
        </button>
      </div>
    </div>
  );
};

CoverImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

