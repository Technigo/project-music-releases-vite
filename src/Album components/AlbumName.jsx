import PropTypes from "prop-types";

export const AlbumName = (name) => {
  return <div>This album is called: {name}</div>;
};

AlbumName.propTypes = {
  name: PropTypes.string.isRequired,
};

// Added this and also had to add a bunch of code in Album.jsx for it to work.
