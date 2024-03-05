import './ArtistName.css'

export const ArtistName = ({ artists }) => {
  return (
    <span className="artistName">
      <a
        /* linked the spotify-link to artist  */
        href={artists.map((artist) => artist.external_urls.spotify)}
        rel="link-spotify"
      >
        {artists.map((artist) => artist.name).join(', ')}
      </a>
    </span>
  )
}
