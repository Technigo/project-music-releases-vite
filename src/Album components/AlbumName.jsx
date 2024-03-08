import PropTypes from "prop-types";

export const AlbumName = ({ albumName, albumURL }) => {
  return (
    <div className>
      <a href={albumURL} target="_blank" rel="noopener noreferrer">
        {albumName}
      </a>
    </div>
  );
};

AlbumName.propTypes = {
  albumName: PropTypes.string.isRequired,
  albumURL: PropTypes.any.isRequired,
};
