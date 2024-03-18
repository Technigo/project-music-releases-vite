import PropTypes from 'prop-types';

export const AlbumName = ({ albumName, albumUrl }) => {
  return (
    <div>
      <a
        href={albumUrl}
        className="album-name"
        target="_blank"
        rel="noopener noreferrer"
      >
        {albumName}
      </a>
    </div>
  );
};

AlbumName.propTypes = {
  albumName: PropTypes.string.isRequired,
  albumUrl: PropTypes.string.isRequired
};

