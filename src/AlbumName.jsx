import PropTypes from "prop-types";

export const AlbumName = ({albumUrl, albumTitle}) => {
  return (
    <h3 className="title"><a href={albumUrl} alt="to album on spotify" target="_blank" rel="noreferrer">{albumTitle}</a></h3>
  )
};

AlbumName.propTypes = {
  albumTitle: PropTypes.string,
  albumUrl: PropTypes.string,
}