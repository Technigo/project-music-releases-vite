import PropTypes from 'prop-types';

function AlbumName(props) {
  return <h2>{props.albumName}</h2>;
}

AlbumName.propTypes = {
  albumName: PropTypes.string.isRequired,
};

export default AlbumName;
