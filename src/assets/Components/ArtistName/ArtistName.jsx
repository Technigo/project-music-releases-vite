export const ArtistName = ({ artists }) => {
  const displayArtists = () => {
    const artistLength = artists.artistLength
    if (artistLength === 0) return ''
    // if only one print the name
    if (artistLength === 1) return artists[0].name
    // take the last 2 artists names
    const lastTwoArtists = artists.slice(-2).map((artist) => artist.name)
    // take the other artists which are not the last two and add comma in between
    const otherArtists = artists
      .slice(0, -2)
      .map((artist) => artist.name)
      .join(',')
    // finally print only a comma for the artists before the last 2 and and & between last 2
    return `${
      otherArtists.length ? otherArtists + ',' : ''
    }${lastTwoArtists.join(' & ')}`
  }
  // Print it into the Album
  return (
    <span className="artistName">
      <a
        /* linked the spotify-link to artist  */
        href={artists.map((artist) => artist.external_urls.spotify)}
        rel="link-spotify"
      >
        {displayArtists()}
      </a>
    </span>
  )
}
// this was the old artistName value 👇🏻
// {artists.map((artist) => artist.name).join(', ')}
