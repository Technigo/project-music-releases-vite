import PropTypes from "prop-types";

export const AlbumName = ({albumUrl, albumTitle}) => {
  return (
    <a href={albumUrl}><h2>{albumTitle}</h2></a>
  )
};

AlbumName.propTypes = {
  albumTitle: PropTypes.string,
  albumUrl: PropTypes.string,
}