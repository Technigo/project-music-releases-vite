import PropTypes from "prop-types";

export const ArtistName = ({ artists }) => {
  return (
    <div className="artist-names">
      {artists.map((artist) => (
        <span key={artist.id}>{artist.name}</span>
      ))}
    </div>
  );
};

ArtistName.propTypes = {
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
