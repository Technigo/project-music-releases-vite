import PropTypes from "prop-types";

export const ArtistName = ({ artistName, artistUrl }) => {
  return (
    <a href={artistUrl} className="artist">{artistName}</a>
  )
};

ArtistName.propTypes = {
  artistName: PropTypes.string,
  artistUrl: PropTypes.string,
};
