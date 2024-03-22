export const ArtistName = ({ artistName }) => {
  return (
    <div className="artist-container">
      {artistName.map((artist, index) => (
        <span key={artist.id} className="artist-name">
          <a className="artist-link" href={artist.external_urls.spotify} target="_blank" rel="noopener noreferrer">
            <h3>{(index ? ", " : "") + artist.name}</h3>
          </a>
        </span>
      ))}
    </div>
  )
}
