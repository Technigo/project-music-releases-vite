import PropTypes from "prop-types"

export const AlbumName = ({ name }) => {
  return (
    <p>
      <span>{name}</span>
    </p>
  )
}

AlbumName.propTypes = {
  name: PropTypes.number.isRequired,
}