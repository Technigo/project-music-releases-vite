export const TotalTracks = (album) => {
  return (
    <>
      <p>Total Tracks: {album.total_tracks}</p>
      <a href={album.external_urls.spotify} rel="link-spotify">
        Listen on Spotify
      </a>
    </>
  )
}
