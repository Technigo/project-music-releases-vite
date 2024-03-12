import PropTypes from "prop-types";
import "./ArtistName.css";

export const ArtistName = ({ artists }) => {
  const artistNames = artists.map((artist, index) => (
    <h3 key={artist.id}>
      <a
        href={artist.external_urls.spotify}
        target="_blank"
        rel="noopener noreferrer"
      >
        {artist.name}
      </a>
      {index < artists.length - 1 && ", "}
    </h3>
  ));

  return <div className="artist-name">{artistNames}</div>;
};

ArtistName.propTypes = {
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
