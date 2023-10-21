import { PropTypes } from "prop-types";

export const AlbumName = ({ albumName, uri }) => {
  return (
    <div>
      <div>
        <a href={uri}>{albumName}</a>
      </div>
    </div>
  );
};

AlbumName.propTypes = {
  albumName: PropTypes.string.isRequired,
  uri: PropTypes.string.isRequired,
};
