import PropTypes from "prop-types";

export const ArtistName = ({ artists }) => {
  const artistNames = artists.map((artist, index) => (
    <span key={artist.id}>
      <a
        href={artist.external_urls.spotify}
        target="_blank"
        rel="noopener noreferrer"
      >
        {artist.name}
      </a>
      {index < artists.length - 1 && ", "}
    </span>
  ));

  return <div className="artistNames">{artistNames}</div>;
};

ArtistName.propTypes = {
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
