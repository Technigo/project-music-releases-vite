import PropTypes from 'prop-types';

export const ArtistName = ({ artistName, artistUrl }) => {
  return (
    <div>
      <a
        href={artistUrl}
        className="artist-name"
        target="_blank"
        rel="noopener noreferrer"
      >
        {artistName}
      </a>
    </div>
  );
};

ArtistName.propTypes = {
  artistName: PropTypes.string.isRequired,
  artistUrl: PropTypes.string.isRequired
};
