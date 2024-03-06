export const ArtistName = ({ artistName, artistURL }) => {
  return(
    <div className="artist-name">
      <a href={artistURL}
      target="_blank"
      className="artist-link">
          <h2>{artistName}</h2>
      </a>
    </div>
  )
}