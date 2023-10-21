import { PropTypes } from "prop-types";

export const AlbumName = ({ albumName, uri }) => {
  return (
    <div className="album-name">
      <a href={uri}>{albumName}</a>
    </div>
  );
};

AlbumName.propTypes = {
  albumName: PropTypes.string.isRequired,
  uri: PropTypes.string.isRequired,
};
