import PropTypes from "prop-types"

//import { ArtistName } from "./ArtistName"
//import { CoverImage } from "./CoverImage"
//import { AlbumName } from "./AlbumName"

export const Album = ({
    albumName, imgSrc, albumUrl, artists }) => {
  return (
    <div className="album-container">
        <div className="album">
        <p>
            <span>Name: {albumName}</span>
        </p>
        <p>
            <span>{albumUrl}</span>
        </p>
        <p>
            <span>{artists}</span>
        </p>

        </div>
     </div>
  )
}

Album.propTypes = {
    albumName: PropTypes.string.isRequired,
    imgSrc: PropTypes.array,


}
