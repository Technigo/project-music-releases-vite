import PropTypes from "prop-types";

export const AlbumName = ({ name, url }) => {
  return (
    <div className="albumName">
      <a href={url}>{name}</a>
    </div>
  );
};

AlbumName.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

AlbumName.defaultProps = {
  name: "Name is missing",
};
