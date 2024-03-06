import PropTypes from "prop-types";

export const AlbumName = ({ name, albumUrl }) => {
  return (
    <p className="albumName">
      <span></span>
      <a href={albumUrl}>{name}</a> 
    </p>
  );
};

AlbumName.propTypes = {
name: PropTypes.string.isRequired,
albumUrl: PropTypes.string.isRequired,
};
