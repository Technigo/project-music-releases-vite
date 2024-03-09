import PropTypes from "prop-types"
import "./ArtistName.css"

export const ArtistName = ({ artistName, artistURL }) => {
  return (
    <div className="artist-name">
      <a href={artistURL}>
        <h3>{artistName}</h3>
      </a>
    </div>
  )
}

ArtistName.propTypes = {
  artistName: PropTypes.string.isRequired,
  artistURL: PropTypes.string.isRequired,
}

export default ArtistName
