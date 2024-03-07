import PropTypes from "prop-types"
import "./AlbumName.css"

export const AlbumName = ({ albumName, albumURL }) => {
  return (
    <div className="AlbumName">
      <a href={albumURL}>
        <h3>{albumName}</h3>
      </a>
    </div>
  )
}

AlbumName.propTypes = {
  albumName: PropTypes.string.isRequired,
  albumURL: PropTypes.string.isRequired,
}

export default AlbumName
