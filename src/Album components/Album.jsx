import PropTypes from "prop-types"
import { AlbumName } from "./AlbumName.jsx"

export const Album = ({name}) => {
  return (
    <div className="title">
      <AlbumName title={name} />
    </div>
  )
}

Album.propTypes = {
  name: PropTypes.string.isRequired,
 
}