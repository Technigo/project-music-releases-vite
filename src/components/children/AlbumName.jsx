import PropTypes from 'prop-types';

export const AlbumName = ({ albumName, externalUrl }) => {
    return (
      <div className="album-name">
        <a href={externalUrl} target="_blank" rel="noopener noreferrer">
          <h2>{albumName}</h2>
        </a>
      </div>
    );
  };
  
  AlbumName.propTypes = {
    albumName: PropTypes.string.isRequired,
    externalUrl: PropTypes.string.isRequired,
  };