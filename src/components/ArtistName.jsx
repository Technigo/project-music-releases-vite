import PropTypes from 'prop-types';

export const ArtistName = ({ name, url, isLast }) => {
  return (
    <>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="artist-name"
      >
        {name}
      </a>
      {!isLast && ', '}
    </>
  );
};

ArtistName.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  isLast: PropTypes.bool.isRequired,
};
