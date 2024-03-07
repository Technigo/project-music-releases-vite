import PropTypes from "prop-types"

export const AlbumName = ({ albumName }) => {
  return (
    <h4>
      <span>{albumName}</span>
    </h4>
  )
}

AlbumName.propTypes = {
  albumName: PropTypes.string.isRequired,
}