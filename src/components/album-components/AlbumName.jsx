import PropTypes from "prop-types";

export const AlbumName = ({ name }) => {
  return <p>Name: {name}</p>;
};

AlbumName.propTypes = {
  name: PropTypes.string.isRequired,
}
