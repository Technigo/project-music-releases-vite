import PropTypes from 'prop-types';
import HeartIcon from '../../assets/icons/heart.svg';
import CirclePlayIcon from '../../assets/icons/play.svg';
import DotsIcon from '../../assets/icons/dots.svg';

export function CoverImage({ coverImageUrl }) {
  return (
    <div className="cover-image-wrapper">
      {/* Use the cover image URL from the JSON data */}
      <img src={coverImageUrl} alt="Cover Image" className="cover-image" />

      {/* Button container */}
      <span className="icon-container">
        {/* Heart button */}
        <button type="button" className="icon-button heart-icon">
          <img src={HeartIcon} alt="Heart Icon" className="icon heart" />
        </button>

        {/* Play button */}
        <button type="button" className="icon-button play-icon">
          <img src={CirclePlayIcon} alt="Circle Play Icon" className="icon play" />
        </button>

        {/* Dots button */}
        <button type="button" className="icon-button dots-icon">
          <img src={DotsIcon} alt="Dots Icon" className="icon dots" />
        </button>
      </span>
    </div>
  );
}

CoverImage.propTypes = {
  coverImageUrl: PropTypes.string.isRequired,
};