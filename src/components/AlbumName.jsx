import { PropTypes } from "prop-types";

export const AlbumName = ({ albumName, uri }) => {
  return (
    <div>
      <div>Album name: {albumName}</div>
      <div>
        <a href={uri}>ALBUM LINK</a>
      </div>
    </div>
  );
};

AlbumName.propTypes = {
  albumName: PropTypes.string.isRequired,
  uri: PropTypes.string.isRequired,
};
