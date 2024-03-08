import PropTypes from 'prop-types'; // Import PropTypes

function ArtistName({ artists }) {
  return (
    <div className="artist-name">
      {artists.map((artist, index) => (
        <a key={index} href={artist.externalUrl}>
          {artist.name}
        </a>
      ))}
    </div>
  );
}

// Define PropTypes for the 'artists' prop
ArtistName.propTypes = {
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      externalUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ArtistName;
