export const ArtistName = ({ artists }) => {
  const displayArtists = () => {
    const artistLength = artists.length
    if (artistLength === 0) return ''
    // if only one print the name
    if (artistLength === 1)
      return <a href={artists[0].external_urls.spotify}>{artists[0].name}</a>
    // if 2 print an & between
    if (artistLength === 2) {
      return (
        <span>
          <a href={artists[0].external_urls.spotify}>{artists[0].name}</a> &{' '}
          <a href={artists[1].external_urls.spotify}>{artists[1].name}</a>
        </span>
      )
    }
    return '' // if more than 2, return empty string
  }
  // Print it into the Album
  return <span className="artistName">{displayArtists()}</span>
}
