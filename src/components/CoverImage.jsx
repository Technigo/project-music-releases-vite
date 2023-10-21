import { PropTypes } from "prop-types";
import { HoverOverlay } from "./HoverOverlay";

export const CoverImage = (album) => {
  return (
    <div className="image-container">
      <HoverOverlay />
      <img src={album.img} className="album-image" alt={album.name} />
    </div>
  );
};

// CoverImage.propTypes = {
//   album: PropTypes.object.isRequired,
// };
