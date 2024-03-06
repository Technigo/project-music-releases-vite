import PropTypes from "prop-types";
import { AlbumName } from "./AlbumName";
import { CoverImage } from "./CoverImage";

export const Album = ({ name, image }) => {
  return (
    <div className="album">
      <CoverImage image={image} />
      <AlbumName name={name} />
    </div>
  );
};

Album.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
};
