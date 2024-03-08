import { CoverImage } from '../CoverImage/CoverImage.jsx'
import { AlbumTitle } from '../AlbumTitle/AlbumTitle.jsx'
import { ArtistName } from '../ArtistName/ArtistName.jsx'
import { ReleaseDate } from '../ReleaseDate/ReleaseDate.jsx'
import { TotalTracks } from '../TotalTracks/TotalTracks.jsx'

export const Album = ({ album }) => {
  return (
    <div className="album">
      <CoverImage image={album.images[0].url} alt={album.name} />
      <AlbumTitle
        title={album.name}
        externalUrl={album.external_urls.spotify}
      />

      <ArtistName artists={album.artists} />

      <ReleaseDate album={album} />

      <TotalTracks totalTracks={album.total_tracks} />
    </div>
  )
}
