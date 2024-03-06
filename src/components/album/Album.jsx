import PropTypes from "prop-types"
import { ArtistName } from "./ArtistName"

export const Album = ({ album }) => {
  return (
    <div className="album">
      <p>
        <span> Album: {album}</span>
      </p>
     
    </div>
  )
}

Album.propTypes = {
  album: PropTypes.string.isRequired,
}