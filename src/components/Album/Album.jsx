import PropTypes from "prop-types";
import { AlbumName } from "./AlbumName";

export const Album = ({ name }) => {
  return (
    <div>
      <AlbumName name={name} />
    </div>
  );
};

Album.propTypes = {
  name: PropTypes.string.isRequired,
};
