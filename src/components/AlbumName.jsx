import PropTypes from 'prop-types';

export const AlbumName = ({ name, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="album-name"
    >
      {name}
    </a>
  );
};

AlbumName.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

