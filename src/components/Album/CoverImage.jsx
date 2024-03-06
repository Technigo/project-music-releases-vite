// import PropTypes from "prop-types";

// export const CoverImage = ({ images }) => {
//   return (
//     <div className="coverImage">
//       CoverImage:
//       {images}
//     </div>
//   );
// };

// CoverImage.propTypes = {
//   images: PropTypes.array,
// };

import PropTypes from "prop-types";

export const CoverImage = ({ image, name }) => {
  // Check if images array exists and has at least one element
  if (!image || image.length === 0) {
    return null; // Return null if images array is empty or undefined
  }

  return (
    <div className="coverImage">
      {/* Display the URL of the second image */}
      <img src={image.url} alt={name} />
    </div>
  );
};

CoverImage.propTypes = {
  image: PropTypes.object,
  name: PropTypes.string,
};
