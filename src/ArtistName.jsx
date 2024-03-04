export const ArtistName = (album) => {
  return (
    <div>
      <p>Artists: {album.artists.map((artist) => artist.name).join(', ')}</p>
    </div>
  )
}
