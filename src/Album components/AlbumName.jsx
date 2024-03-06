import PropTypes from "prop-types"

export const AlbumName = ({ albumName }) => {
  return (
    <p>
      <span>{albumName}</span>
    </p>
  )
}

AlbumName.propTypes = {
  albumName: PropTypes.string.isRequired,
}