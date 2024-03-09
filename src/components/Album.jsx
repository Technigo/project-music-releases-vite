import { AlbumName } from "./AlbumName"
import { ArtistName } from "./ArtistName"
import { CoverImage } from "./CoverImage"

export const Album = ({artistName, albumName, coverImage}) => {
  return (
    <div className="album">
      <CoverImage coverImage={coverImage}/>
      <ArtistName artistName={artistName}/>
      <AlbumName albumName={albumName}/>
    </div>
  )
}



