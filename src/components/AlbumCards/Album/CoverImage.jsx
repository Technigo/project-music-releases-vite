// Importing PropTypes to get rid of error saying props missing in validation.
import PropTypes from "prop-types";

export const CoverImage = ({ image }) => {
    // Functional component that destructures the prop image, and sets it as the source of the image tag.
    return (
      <div className="cover-container">
        <img className="cover-image" src={image.url} alt="Album Cover"/>
        <div className="icon-container hidden">
          <img id="favorite-icon" src="src/assets/icons/heart.svg" alt="Favorite Icon" />
          <img id="play-icon" src="src/assets/icons/play.svg" alt="Play Icon" />
          <img id="more-info-icon" src="src/assets/icons/dots.svg" alt="More Info Icon" />
        </div>
      </div>
      )
}

// Defining propTypes for this component, to get rid of error saying props is missing in validation.
CoverImage.propTypes = {
  image: PropTypes.shape({
      url: PropTypes.string.isRequired,
  }).isRequired,
};
