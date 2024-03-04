export const ArtistName = ({ artists }) => {
  return <span>{artists.map((artist) => artist.name).join(', ')}</span>
}
