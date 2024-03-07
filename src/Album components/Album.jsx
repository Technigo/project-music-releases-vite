import PropTypes from "prop-types"
import { AlbumName } from "./AlbumName.jsx"
import { CoverImage } from "./CoverImage.jsx"
import { ArtistName } from "./ArtistName.jsx"
import "./Album.css"

export const Album = ({albumName, coverImage, artistName}) => {
  return (
    <div className="album-container">
    <div className="image-container">
      <CoverImage coverImage={coverImage} /></div>
      <div className="name">
      <AlbumName albumName={albumName} /></div>
      <div className="artist">
        <ArtistName artistName={artistName} />
      </div>
    </div>
  )
}

Album.propTypes = {
  albumName: PropTypes.string.isRequired,
  coverImage: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
}