/* eslint-disable react/prop-types */
//import PropTypes from "prop-types";

export const AlbumName = ({ albumUrl, albumName }) => {
  return (
    <a href={albumUrl}>
      <h2>{albumName}</h2>
    </a>
  );
};

/*AlbumName.propTypes = {
  albumName: PropTypes.string.isRequired,
  albumUrl: PropTypes.string.isRequired
};*/

AlbumName.defaultProps = {
  albumName: "Name is missing"
};

