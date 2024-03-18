export const PlaylistName = ({ playlists, playlistsUrls }) => {
  return (
    <span>
      <a href={playlistsUrls}>{playlists}</a>
    </span>
  )
}
