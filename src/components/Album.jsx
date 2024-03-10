import { AlbumName } from "./AlbumName"
import { ArtistName } from "./ArtistName"
import { CoverImage } from "./CoverImage"

export const Album = ({artistName, albumName, coverImage, artistUrl, albumUrl}) => {
  return (
    <div className="album">
      <CoverImage coverImage={coverImage}/>
      <ArtistName artistName={artistName} astistUrl={artistUrl}/>
      <AlbumName albumName={albumName} albumUrl={albumUrl}/>
    </div>
  )
}


