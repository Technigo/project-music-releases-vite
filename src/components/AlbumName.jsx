import PropTypes from 'prop-types';

// Define component AlbumName
function AlbumName(props) {
  return <h2>{props.albumName}</h2>;
}

// Define prop types for AlbumName
AlbumName.propTypes = {
  albumName: PropTypes.string.isRequired,
};

export default AlbumName;
