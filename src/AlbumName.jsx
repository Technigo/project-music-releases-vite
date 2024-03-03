import PropTypes from "prop-types";

export const AlbumName = ({albumUrl, albumTitle}) => {
  return (
    <h2 className="title"><a href={albumUrl}>{albumTitle}</a></h2>
  )
};

AlbumName.propTypes = {
  albumTitle: PropTypes.string,
  albumUrl: PropTypes.string,
}