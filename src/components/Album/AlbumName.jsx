import PropTypes from "prop-types";
import './AlbumName.css'

export const AlbumName = ({ albumName, url }) => {
  return (
    <div className="albumName">
      <h1><a href={url} target="_blank" rel="noopener noreferrer">
        {albumName}
      </a></h1>
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
