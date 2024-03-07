import PropTypes from "prop-types"

export const ArtistName = ({ artistName }) => {
  return (
    <p>
      <span>{artistName}</span>
    </p>
  )
}

ArtistName.propTypes = {
  artistName: PropTypes.string.isRequired,
}