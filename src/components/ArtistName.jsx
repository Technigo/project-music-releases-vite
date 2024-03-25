export const ArtistName = ({ artistName }) => {
  return (
    <div className="artist-container">
      {artistName.map((artist, index) => (
        <span key={artist.id} className="artist-name">
          <a href={artist.external_urls.spotify} target="_blank" rel="noopener noreferrer" className="artist-link">
            <h3>{(index ? ", " : "") + artist.name}</h3>
          </a>
        </span>
      ))}
    </div>
  )
}
