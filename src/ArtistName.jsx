import PropTypes from "prop-types";

export const ArtistName = ({artistName, artistUrl}) => {
  return (
    <h3><a href={artistUrl}>{artistName}</a></h3>
  )
};

ArtistName.propTypes = {
  artistName: PropTypes.string,
  artistUrl: PropTypes.string,
}