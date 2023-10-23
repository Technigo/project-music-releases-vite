import PropTypes from 'prop-types'; // Import PropTypes

function AlbumName({ name }) {
  return <div className="album-name">{name}</div>;
}

// Define PropTypes for the 'name' prop
AlbumName.propTypes = {
  name: PropTypes.string.isRequired, // Assuming 'name' should be a string and required
};

export default AlbumName;

