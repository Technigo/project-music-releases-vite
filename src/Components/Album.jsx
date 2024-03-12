import PropTypes from "prop-types"
import { AlbumName } from "./AlbumName"
import { ArtistName } from "./ArtistName"
import { CoverImage } from "./CoverImage"
import "./Album.css"

export const Album = ({ albumName, coverImg, artists, albumUrl }) => {
  return (
    <section className="album-wrapper">
      <div className="album-container">
        <CoverImage coverImg={coverImg} />
        <AlbumName albumUrl={albumUrl} albumName={albumName} />
        <ArtistName artists={artists} />
      </div>
    </section>
  )
}

//Define proptypes
Album.propTypes = {
  albumName: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
  artists: PropTypes.arrayOf(PropTypes.string).isRequired,
  albumUrl: PropTypes.string.isRequired,
}
