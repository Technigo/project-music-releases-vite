import PropTypes from "prop-types"
import { AlbumName } from "./AlbumName.jsx"
import { CoverImage } from "./CoverImage.jsx"

export const Album = ({albumName, coverImage}) => {
  return (
    <div className="title">
      <AlbumName albumName={albumName} />
      <CoverImage coverImage={coverImage} />
    </div>
  )
}

Album.propTypes = {
  albumName: PropTypes.string.isRequired,
  coverImage: PropTypes.string.isRequired,
}