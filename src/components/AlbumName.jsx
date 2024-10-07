import PropTypes from "prop-types";

export const AlbumName = ({ title, externalUrl }) => {
  return (
    <a
      href={externalUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="album-name"
    >
      {title}
    </a>
  );
};

AlbumName.propTypes = {
  title: PropTypes.string.isRequired,
  externalUrl: PropTypes.string.isRequired,
};
