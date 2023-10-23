import PropTypes from 'prop-types';

// Define component ArtistName
function ArtistName(props) {
  return <p>{props.artistName}</p>;
}

// Define prop types for ArtistName
ArtistName.propTypes = {
  artistName: PropTypes.string.isRequired,
};

export default ArtistName;