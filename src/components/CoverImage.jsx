// Importing PropTypes to get rid of error saying props missing in validation.
import PropTypes from "prop-types";

export const CoverImage = ({ image }) => {
    // Functional component that destructures the prop image, and sets it as the source of the image tag.
    return (
        <img src={image.url} alt="Album Cover"/>
      )
}

// Defining propTypes for this component, to get rid of error saying props is missing in validation.
CoverImage.propTypes = {
  image: PropTypes.shape({
      url: PropTypes.string.isRequired,
  }).isRequired,
};