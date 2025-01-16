import PropTypes from "prop-types"
import "./ArtistName.css"

export const ArtistName = ({ artistName, artistURL, addComma = false }) => {
  return (
    <div className="artist-name">
      <a href={artistURL}>
        <h3>
          {artistName}
          {addComma && ","}
        </h3>
      </a>
    </div>
  )
}

ArtistName.propTypes = {
  artistName: PropTypes.string.isRequired,
  artistURL: PropTypes.string.isRequired,
  addComma: PropTypes.bool,
}

export default ArtistName
