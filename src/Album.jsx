import { CoverImage } from './CoverImage.jsx'
import { AlbumTitle } from './AlbumTitle.jsx'
import { ArtistName } from './ArtistName.jsx'
import { ReleaseDate } from './ReleaseDate.jsx'
import { TotalTracks } from './TotalTracks.jsx'
import { ExternalUrl } from './ExternalUrl.jsx'

export const Album = ({ album }) => {
  return (
    <div className="album">
      <CoverImage image={album.images[0].url} alt={album.name} />
      <AlbumTitle title={album.name} />
      <p>
        <ArtistName artists={album.artists} />
      </p>
      <ReleaseDate releaseDate={album.release_date} />
      <TotalTracks totalTracks={album.total_tracks} />
      <ExternalUrl externalUrl={album.external_urls.spotify} />
    </div>
  )
}
