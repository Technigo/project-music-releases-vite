import PropTypes from "prop-types";

export const AlbumName = ({ album }) =>{
  return (
    <h3>{album.name}</h3>
  )
}

AlbumName.propTypes = {
  album: PropTypes.object
}