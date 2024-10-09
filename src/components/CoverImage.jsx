// import PropTypes from 'prop-types'; // Import PropTypes

// function CoverImage({ imageUrl }) {
//   return <img className="cover-image" src={imageUrl} alt="Album Cover" />;
// }

// // Define PropTypes for the 'imageUrl' prop
// CoverImage.propTypes = {
//   imageUrl: PropTypes.string.isRequired, // Assuming 'imageUrl' should be a string and required
// };

// export default CoverImage;

import PropTypes from 'prop-types';

function CoverImage({ imageUrl }) {
  // Choose the desired image size (e.g., 300x300 pixels)
  const imageSize = imageUrl.find((image) => image.width === 300 && image.height === 300);

  if (imageSize) {
    return <img className="cover-image" src={imageSize.url} alt="Album Cover" />;
  } else {
    // Handle the case when the desired size is not found
    return <div className="cover-image-placeholder">Image Not Found</div>;
  }
}

CoverImage.propTypes = {
  imageUrl: PropTypes.arrayOf(
    PropTypes.shape({
      height: PropTypes.number.isRequired,
      width: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CoverImage;

