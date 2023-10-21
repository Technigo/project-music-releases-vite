import { PropTypes } from "prop-types";
import "./AlbumName.css";

export const AlbumName = ({ albumName, uri }) => {
  return (
    <div className="album-name-link">
      <a href={uri}>{albumName}</a>
    </div>
  );
};

AlbumName.propTypes = {
  albumName: PropTypes.string.isRequired,
  uri: PropTypes.string.isRequired,
};
