import { AlbumName } from "./AlbumName"
import { ArtistName } from "./ArtistName"
import { CoverImage } from "./CoverImage"
import styles from "./Album.css"

export const Album = ({artistName, albumName, coverImage}) => {
  return (
    <div className="album">
      <CoverImage coverImage={coverImage}/>
      <ArtistName artistName={artistName}/>
      <AlbumName albumName={albumName}/>
      <br />
    </div>
  )
}



