import PropTypes from "prop-types";

export const AlbumName = ({ name }) => {
  return (
    <div className="albumName">
      <span> {name}</span>
    </div>
  );
};

AlbumName.propTypes = {
  name: PropTypes.string.isRequired,
};

AlbumName.defaultProps = {
  name: "Name is missing",
};
