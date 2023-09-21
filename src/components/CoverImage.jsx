import PropTypes from 'prop-types'; // Import PropTypes

function CoverImage({ imageUrl }) {
  return <img className="cover-image" src={imageUrl} alt="Album Cover" />;
}

// Define PropTypes for the 'imageUrl' prop
CoverImage.propTypes = {
  imageUrl: PropTypes.string.isRequired, // Assuming 'imageUrl' should be a string and required
};

export default CoverImage;
