import { AlbumName } from "./AlbumName"
import { ArtistName } from "./ArtistName"
import { CoverImage } from "./CoverImage"

export const Album = ({key, artistName, albumName, coverImage}) => {
  return (
    <div>
      <AlbumName />
      <ArtistName artistName={album.artists[0].name}/>
      <CoverImage/>
      <br />
    </div>
  )
}



