import PropTypes from "prop-types";
import { PlayOverlay } from "./PlayOverlay";

export const CoverImage = ({ images }) => {
  const getImage = images[0].url;
    return (
      <div className="cover-image">
        <img src={getImage} alt="Album cover"></img>
        <PlayOverlay />
      </div>
    );
};

CoverImage.propTypes = {
  images: PropTypes.array.isRequired,
};
