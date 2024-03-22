import { AlbumName } from "./AlbumName"
import { ArtistName } from "./ArtistName"
import { CoverImage } from "./CoverImage"

export const Album = ({ albumData }) => {
  return (
    <div>
        <CoverImage coverImage={albumData.images[0].url} />
        <div>
            <AlbumName albumName={albumData.name} albumUrl={albumData.external_urls.spotify} />
            <ArtistName artistName={albumData.artists} />
        </div>
    </div>
  )
}
