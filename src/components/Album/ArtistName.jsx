import PropTypes from "prop-types";

export const ArtistName = ({ artists }) => {
  const artistNames = artists.map((artist) => artist.name).join(", ");

  return <div className="artistNames">{artistNames}</div>;
};

ArtistName.propTypes = {
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
