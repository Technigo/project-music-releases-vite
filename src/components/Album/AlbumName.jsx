import PropTypes from "prop-types";

export const AlbumName = ({ albumName, url }) => {
  return (
    <div className="albumName">
      <a href={url} target="_blank" rel="noopener noreferrer">
        {albumName}
      </a>
    </div>
  );
};

AlbumName.propTypes = {
  albumName: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

AlbumName.defaultProps = {
  albumName: "Name is missing",
};
