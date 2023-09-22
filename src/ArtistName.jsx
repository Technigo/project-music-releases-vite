import PropTypes from 'prop-types';

function ArtistName(props) {
  return <p>{props.artistName}</p>;
}

ArtistName.propTypes = {
  artistName: PropTypes.string.isRequired,
};

export default ArtistName;