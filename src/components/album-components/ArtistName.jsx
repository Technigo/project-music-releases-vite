import PropTypes from "prop-types";

export const ArtistName = ({ artists }) => {
  const getArtist = artists.map(({ name }) => (name));
  return <p>{getArtist.join(", ")}</p>;
};

ArtistName.propTypes = {
  artists: PropTypes.array.isRequired,
};
