import './sidebar.css'
import { CoverPlaylistImg } from '../CoverPlaylistImg/CoverPlaylistImg.jsx'
import { PlaylistName } from '../PlaylistName/PlaylistName.jsx'
export const Sidebar = ({ playlists }) => {
  return (
    <div className="playlistContainer">
      <CoverPlaylistImg Img={playlists.images[0].url} alt={playlists.name} />
      <PlaylistName
        playlists={playlists.name}
        playlistsUrls={playlists.external_urls.spotify}
      />
    </div>
  )
}
