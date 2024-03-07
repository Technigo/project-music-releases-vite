import PropTypes from "prop-types";
import "./CoverImage.css";

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
          <img src="/src/assets/icons/heart.svg" alt="hearticon" />
        </div>
        <div className="play-icon">
          <img src="/src/assets/icons/play.svg" alt="playicon" />
        </div>
        <div className="dots-icon">
          <img src="/src/assets/icons/dots.svg" alt="dotsicon" />
        </div>
      </div>
    </div>
  );
};

CoverImage.propTypes = {
  image: PropTypes.object,
  name: PropTypes.string,
};

// div CoverImage
//   div image
//    div Icons
//      div heart
//      div play
//      div ellipsis
// /div
// /div
